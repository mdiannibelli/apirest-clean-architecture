import { prisma } from "../../data/prisma/prisma";
import { UserPrismaClientDatasource } from "../../domain/datasources/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { UpdateUserDto } from "../../domain/dtos/update-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors/custom-error";

export class UserPrismaClientDatasourceImplement implements UserPrismaClientDatasource {

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const { email, password } = createUserDto;
        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: password
            }
        })
        return UserEntity.fromJson(newUser);
    }
    async get(): Promise<UserEntity[]> {
        const allUsers = await prisma.user.findMany();
        return allUsers.map(user => UserEntity.fromJson(user));
    }
    async getById(id: number): Promise<UserEntity> {
        const user = await prisma.user.findFirst({ where: { id } });
        if (!user) throw new CustomError(`User with id ${id} not found!`);

        return UserEntity.fromJson(user);
    }
    async deleteById(id: number): Promise<UserEntity> {
        const userDeleted = await prisma.user.delete({ where: { id } });
        if (!userDeleted) throw new CustomError(`User with id ${id} can not be deleted`);
        return UserEntity.fromJson(userDeleted);
    }
    async updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
        const user = await this.getById(updateUserDto.id);
        if (!user) throw new CustomError(`User with user ${updateUserDto.id} not found!`);

        const { password, id } = updateUserDto;
        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                password: password
            }
        });
        if (!updatedUser) throw new CustomError(`User with id ${id} can not be updated`);
        return UserEntity.fromJson(updatedUser);
    }

}