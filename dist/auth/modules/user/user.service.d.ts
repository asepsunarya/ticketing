import { Model, PaginateModel, PaginateResult } from 'mongoose';
import { UserDocument } from './user.model';
import { User } from './entities/user.entity';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument> & PaginateModel<UserDocument>);
    createUser(user: User): Promise<UserDocument>;
    getUser(query: object): Promise<UserDocument>;
    paginate(query: object, options: any): Promise<PaginateResult<UserDocument>>;
}
