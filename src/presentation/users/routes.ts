import { Router } from "express";
import { UserPrismaClientDatasourceImplement } from "../../infraestructure/datasource/userprismaclient.datasource.impl";
import { UserRepositoryImplement } from "../../infraestructure/repository/user.repository.impl";
import { UserController } from "./controller";

export class UserRoutes {
    constructor() { }

    static get routes(): Router {
        const router = Router();

        const userDatasource = new UserPrismaClientDatasourceImplement();
        const userRepository = new UserRepositoryImplement(userDatasource);
        const userController = new UserController(userRepository);

        router.get('/', userController.getUsers);
        router.get('/:id', userController.getUserById);
        router.post('/', userController.createUser);
        router.delete('/:id', userController.deleteUser);
        router.put('/:id', userController.updateUser);


        return router;
    }
}