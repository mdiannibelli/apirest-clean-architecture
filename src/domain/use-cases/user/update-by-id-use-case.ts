import { UpdateUserDto } from "../../dtos/update-user.dto";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

interface UpdateUserInterface {
    execute(updateUserDto: UpdateUserDto): Promise<UserEntity>;
}

export class UpdateUser implements UpdateUserInterface {
    constructor(
        private readonly UserRepository: UserRepository
    ) { }

    execute(updateUserDto: UpdateUserDto): Promise<UserEntity> {
        return this.UserRepository.updateById(updateUserDto);
    }
}