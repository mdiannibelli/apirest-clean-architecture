import { UserPrismaClientDatasource } from "../../domain/datasources/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { UpdateUserDto } from "../../domain/dtos/update-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserRepositoryImplement implements UserRepository {
    constructor(
        private readonly datasource: UserPrismaClientDatasource
    ) { }
    create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.datasource.create(createUserDto);
    }
    get(): Promise<UserEntity[]> {
        return this.datasource.get();
    }
    getById(id: number): Promise<UserEntity> {
        return this.datasource.getById(id);
    }
    deleteById(id: number): Promise<UserEntity> {
        return this.datasource.deleteById(id);
    }
    updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
        return this.datasource.updateById(updateUserDto);
    }

}