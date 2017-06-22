import { Controller, Post, Response, Body, HttpStatus } from '@nestjs/common';
import { User } from './types/User.type';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor (private userService:UserService) {
    }

    @Post()
    async addUser (@Response() res, @Body('userName') userName) {
        try {
            let user:User = await this.userService.addUser(userName);
            res.status(HttpStatus.CREATED).send(user);
        } catch (e) {
            res.status(HttpStatus.CONFLICT).json(`User ${e} is already in the chat`);
        }
    }
}