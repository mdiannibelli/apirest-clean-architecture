import { CreateUserDto } from "../../dtos/create-user.dto";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

export interface UseCaseInterface {
    execute(createUserDto: CreateUserDto): Promise<UserEntity>;
}

export class CreateUser implements UseCaseInterface {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    execute(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userRepository.create(createUserDto);
    }
}