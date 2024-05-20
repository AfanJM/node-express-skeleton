import { Router } from "express";
import { UserService } from "./user-services";
import { UserController } from "./user-controller";


export class UserRoutes {

    static get routes(): Router {

        const service = new UserService

        const controller = new UserController(service)

        const router = Router()

        router.get('/:id', controller.findOne)

        return router


    }


}