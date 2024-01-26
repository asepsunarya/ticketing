import { Types } from 'mongoose';
export declare class User {
    _id: string | Types.ObjectId;
    email?: string;
    name?: string;
    role?: string;
    password?: string;
    photo?: string;
}
