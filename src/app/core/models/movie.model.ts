export interface Movie {
    link: string;
    imgSrc: string | null;
    title: string;
    rating: number;
    vote: number;
    videoId?: string;  // Opcional, ya que no todas las películas pueden tener un video de YouTube
  }
  