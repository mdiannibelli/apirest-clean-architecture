import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

interface GetUserByIdInterface {
    execute(id: number): Promise<UserEntity>;
}

export class GetUserById implements GetUserByIdInterface {
    constructor(
        private readonly UserRepository: UserRepository
    ) { }

    execute(id: number): Promise<UserEntity> {
        return this.UserRepository.getById(id);
    }
}

