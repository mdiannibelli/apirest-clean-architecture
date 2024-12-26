import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

interface GetUserInterface {
    execute(): Promise<UserEntity[]>;
}

export class GetUsers implements GetUserInterface {
    constructor(
        private readonly UserRepository: UserRepository
    ) {

    }
    execute(): Promise<UserEntity[]> {
        return this.UserRepository.get();
    };
}