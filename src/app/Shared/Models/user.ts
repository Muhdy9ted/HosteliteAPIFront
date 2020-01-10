import { Photo } from './photo';

export interface User {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    DOB: Date;
    datejoined: Date;
    photoUrl: string;
    gender: string;
    photos?: Photo[];
    age?: string;


}
