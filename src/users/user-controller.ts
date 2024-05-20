import { Request, Response } from 'express'

import { UserService } from './user-services'

export class UserController {

    constructor(private readonly userService: UserService) { }


    findOne = (req: Request, res: Response) => {

        const { id } = req.params

        this.userService.findOne(id)
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err))

    }

}