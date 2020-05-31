import { Photo } from './photo';

export class Hostel {
    public ID: number;

    public HostelName: string;

    public HostelAddress: string;

    public HostelLocation: string;

    public HostelType: string;

    public HostelNumberOfRooms?: number;

    public HostelDescription?: string;

    public VacantRoom: boolean;

    // public HostelSlug: string;

    public RentPerRoom?: number;

    public CreatedHostel: Date;

    public PhotoUrl: string;

    photos?: Photo[];

}
