export class CreateUserDto {
    constructor(
        public readonly email: string,
        public readonly password: string,
        public readonly age?: number,
        public readonly name?: string,
    ) { }

    public static create(object: { [key: string]: any }): { err: null | string, data: null | CreateUserDto } {
        const { email, password, age, name } = object;
        //TODO Zod validations
        if (!email || email.length === 0) return { err: 'Email required', data: null };
        if (!password || password.length <= 6) return { err: 'Invalid password', data: null };
        return {
            err: null,
            data: new CreateUserDto(email, password, age, name)
        }
    }
}