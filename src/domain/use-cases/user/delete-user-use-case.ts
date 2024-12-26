import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

interface DeleteUserInterface {
    execute(id: number): Promise<UserEntity>;
}

export class DeleteUser implements DeleteUserInterface {
    constructor(
        private readonly UserRepository: UserRepository
    ) { }

    execute(id: number): Promise<UserEntity> {
        return this.UserRepository.deleteById(id);
    }
}