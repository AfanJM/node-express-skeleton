import { Router } from "express";
import { UserRoutes } from "../users/user-routes";

export class AppRoutes {

    static get routes(): Router {

        const router = Router()

        router.use('/api/user', UserRoutes.routes)

        return router

    }

}