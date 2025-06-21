export class ImageOptimizer {
  private static readonly IMAGE_SIZES = {
    thumbnail: 'w92',
    small: 'w154',
    medium: 'w185',
    large: 'w342',
    xlarge: 'w500',
    xxlarge: 'w780',
    original: 'original'
  };

  private static readonly BASE_URL = 'https://image.tmdb.org/t/p/';

  /**
   * Obtiene la URL optimizada de una imagen según el tamaño y dispositivo
   */
  static getOptimizedImageUrl(path: string, size: keyof typeof ImageOptimizer.IMAGE_SIZES = 'medium'): string {
    if (!path) return '';
    
    const imageSize = this.IMAGE_SIZES[size];
    return `${this.BASE_URL}${imageSize}${path}`;
  }

  /**
   * Obtiene la URL de imagen responsive según el ancho de pantalla
   */
  static getResponsiveImageUrl(path: string, screenWidth: number): string {
    if (!path) return '';

    let size: keyof typeof ImageOptimizer.IMAGE_SIZES = 'medium';
    
    if (screenWidth <= 480) {
      size = 'small';
    } else if (screenWidth <= 768) {
      size = 'medium';
    } else if (screenWidth <= 1024) {
      size = 'large';
    } else if (screenWidth <= 1440) {
      size = 'xlarge';
    } else {
      size = 'xxlarge';
    }

    return this.getOptimizedImageUrl(path, size);
  }

  /**
   * Preload una imagen
   */
  static preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  }

  /**
   * Preload múltiples imágenes
   */
  static preloadImages(sources: string[]): Promise<void[]> {
    return Promise.all(sources.map(src => this.preloadImage(src)));
  }

  /**
   * Obtiene el tamaño de imagen apropiado para el carousel
   */
  static getCarouselImageUrl(path: string): string {
    return this.getOptimizedImageUrl(path, 'xxlarge');
  }

  /**
   * Obtiene el tamaño de imagen apropiado para posters
   */
  static getPosterImageUrl(path: string): string {
    return this.getOptimizedImageUrl(path, 'large');
  }

  /**
   * Obtiene el tamaño de imagen apropiado para thumbnails
   */
  static getThumbnailImageUrl(path: string): string {
    return this.getOptimizedImageUrl(path, 'small');
  }

  /**
   * Verifica si una imagen existe
   */
  static async imageExists(src: string): Promise<boolean> {
    try {
      await this.preloadImage(src);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Obtiene una imagen de fallback si la principal no existe
   */
  static async getImageWithFallback(primarySrc: string, fallbackSrc: string): Promise<string> {
    const exists = await this.imageExists(primarySrc);
    return exists ? primarySrc : fallbackSrc;
  }
} 