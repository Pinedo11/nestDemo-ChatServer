import { Controller, Post } from 'nest.js';
import { User } from './types/User.type';
import { UserService } from './user.service';

@Controller({ path: 'users' })
export class UserController {

    constructor (private userService:UserService) {
    }

    @Post()
    async addUser (req, res) {
        try {
            let user:User = await this.userService.addUser(req.body.userName);
            res.status(201).send(user);
        } catch (e) {
            res.status(501).json(`User ${e} is already in the chat`);
        }
    }
}