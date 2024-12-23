import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class UserPrismaClientDatasource {
    abstract create(createUserDto: CreateUserDto): Promise<UserEntity>;
    abstract get(): Promise<UserEntity[]>;
    abstract getById(id: number): Promise<UserEntity>;
    abstract deleteById(id: number): Promise<UserEntity>;
    abstract updateById(updateUserDto: UpdateUserDto): Promise<UserEntity>;
}