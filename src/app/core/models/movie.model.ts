import { Backdrop } from "./backdrop.model";

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface Director {
  id: number;
  name: string;
  profile_path: string | null;
}

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
    genres?: { id: number; name: string }[];
    release_date?: string;
    budget?: number;
    revenue?: number;
    runtime?: number;
    cast?: CastMember[];
    director?: Director;
  }
  