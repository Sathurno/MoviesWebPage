import { environment } from '../../../environments/environment';

export interface Backdrop {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
    getBackdropUrl: () => string;
  }
  
  export function createBackdrop(backdropData: any): Backdrop {
    return {
      aspect_ratio: backdropData.aspect_ratio,
      height: backdropData.height,
      iso_639_1: backdropData.iso_639_1,
      file_path: backdropData.file_path,
      vote_average: backdropData.vote_average,
      vote_count: backdropData.vote_count,
      width: backdropData.width,
      getBackdropUrl: function () {
        return `${environment.imageBaseUrl}/${environment.imageSize.w1280}${this.file_path}`;
      },
    };
  }
  