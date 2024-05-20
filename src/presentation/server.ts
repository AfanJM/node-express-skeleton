import express, { Router } from "express";
import compression from 'compression'

interface Options {
    port: number,
    routes: Router
}

export class Server {

    public readonly app = express()
    private readonly port: number
    private readonly routes: Router

    constructor(opt: Options) {

        const { port, routes } = opt

        this.port = port

        this.routes = routes

    }

    async Start() {

        this.app.use(express.json())
        
        this.app.use( express.urlencoded({ extended: true }) )

        this.app.use(compression())

        this.app.use(this.routes)

        this.app.listen( this.port, () => {

            console.log(`Starting server on port ${this.port}`)

        } )

    }


}