export class UpdateUserDto {
    constructor(
        public readonly id: number,
        public readonly password: string
    ) { }

    static update(object: { [key: string]: any }): { err: string | null, data: UpdateUserDto | null } {
        const { id, password } = object;
        if (!password || password.length <= 6) return { err: 'Invalid password', data: null }

        return {
            err: null,
            data: new UpdateUserDto(id, password)
        }
    }
}