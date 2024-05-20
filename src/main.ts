import { envs } from "./config/env-adapter";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

function bootstrap() {

    const server = new Server({

            port: envs.PORT,
            routes: AppRoutes.routes
    })

    server.Start()

}

bootstrap()