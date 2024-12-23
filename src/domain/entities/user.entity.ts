import { CustomError } from "../errors/custom-error";

export class UserEntity {
    constructor(
        public id: number,
        public email: string,
        public password: string,
        public age?: number
    ) {

    }

    public static fromJson(object: { [key: string]: any }) {
        const { id, email, password, age } = object;
        //TODO Zod validations
        if (!id) throw new CustomError("Id required", 400);
        if (!email || typeof email !== 'string') throw new CustomError("Invalid email", 400);
        if (!password || typeof password !== 'string') throw new CustomError("Invalid password", 400);

        return new UserEntity(id, email, password, age);
    }
}