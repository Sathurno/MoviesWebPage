import { Backdrop } from "./backdrop.model";

export interface Movie {
    id: string;
    principalImage?: Backdrop;
    link: string;
    imgSrc: string | null;
    title: string;
    rating: number;
    vote: number;
    videoId?: string;  
    thumbnails?: Backdrop[]; 
    description?: string;
    logosUrls?: string[] | null;
  }
  