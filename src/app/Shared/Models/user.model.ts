import { Photo } from './photo';

export class User {
    public Id: number;
    public Email: string;
    public Firstname: string;
    public Lastname: string;
    public gender: string;
    public Age: number;
    public Datejoined: Date;
    public PhotoUrl: string;
    photos?: Photo[];
}
