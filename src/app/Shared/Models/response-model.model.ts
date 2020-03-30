import { User } from './user.model';

export class ResponseModel {
    state: number;
    msg: string;
    data: User;
}
