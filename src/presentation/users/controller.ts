import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories/user.repository";
import { GetUsers } from "../../domain/use-cases/user/get-users-use-case";
import { CustomError } from "../../domain/errors/custom-error";
import { GetUserById } from "../../domain/use-cases/user/get-user-by-id-use-case";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { CreateUser } from "../../domain/use-cases/user/create-use-case";
import { DeleteUser } from "../../domain/use-cases/user/delete-user-use-case";
import { UpdateUserDto } from "../../domain/dtos/update-user.dto";
import { UpdateUser } from "../../domain/use-cases/user/update-by-id-use-case";

export class UserController {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    private handleErrorResponse = (res: Response, err: unknown) => {
        if (err instanceof CustomError) {
            res.status(err.statusCode).json({ message: err.message })
            return;
        }
        console.log(err)
        res.status(500).json({ message: "Server Internal Error, check logs" });
    }

    public getUsers = (_: Request, res: Response) => {
        new GetUsers(this.userRepository)
            .execute()
            .then(response => res.json(response))
            .catch(err => this.handleErrorResponse(res, err));
    }

    public getUserById = (req: Request, res: Response) => {
        const userId = +req.params.id;
        new GetUserById(this.userRepository)
            .execute(userId)
            .then(response => res.json(response))
            .catch(err => this.handleErrorResponse(res, err))
    }

    public createUser = (req: Request, res: Response) => {
        const { data, err } = CreateUserDto.create(req.body);
        if (err || !data) return this.handleErrorResponse(res, err);

        new CreateUser(this.userRepository)
            .execute(data)
            .then(response => res.json(response))
            .catch(err => this.handleErrorResponse(res, err));
    }

    public deleteUser = (req: Request, res: Response) => {
        const userId = +req.params.id;
        new DeleteUser(this.userRepository)
            .execute(userId)
            .then(response => res.json(response))
            .catch(err => this.handleErrorResponse(res, err))
    }

    public updateUser = (req: Request, res: Response) => {
        const userId = +req.params.id;
        //if (isNaN(userId)) return res.status(400).json("id must be a number");
        const { data, err } = UpdateUserDto.update({ ...req.body, userId });
        if (err || !data) return this.handleErrorResponse(res, err);

        new UpdateUser(this.userRepository)
            .execute(data)
            .then(response => res.json(response))
            .catch(err => this.handleErrorResponse(res, err));
    }
}