import { Backdrop } from "./backdrop.model";

export interface Movie {
    principalImage?: Backdrop;
    link: string;
    imgSrc: string | null;
    title: string;
    rating: number;
    vote: number;
    videoId?: string;  
    thumbnails?: Backdrop[]; 
  }
  