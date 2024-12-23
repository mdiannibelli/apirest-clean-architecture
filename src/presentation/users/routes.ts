import { Router } from "express";

export class UserRoutes {
    constructor() { }

    static get routes(): Router {
        const router = Router();

        //TODO create USER datasource
        //TODO create USER repository
        //TODO create USER controller 

        router.get('/', () => console.log("user routes"));
        //TODO CRUD routes


        return router;
    }
}