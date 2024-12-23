import { UserPrismaClientDatasource } from "../../domain/datasources/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { UpdateUserDto } from "../../domain/dtos/update-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";

export class UserPrismaClientDatasourceImplement implements UserPrismaClientDatasource {
    //TODO Use Prisma Client to implement datasource
    create(createUserDto: CreateUserDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    get(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}