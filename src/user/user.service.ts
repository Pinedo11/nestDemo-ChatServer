import { Component } from '@nestjs/common';
import { User } from './types/User.type';

@Component()
export class UserService {

    private USERS:User[] = [];
    private count:number = 0;

    addUser (userName:string):Promise<User> {
        return new Promise<User>(((resolve, reject) => {
            if (this.USERS.find((user => user.name === userName))) {
                reject(userName);
            } else {
                let user:User = { id: ++this.count, name: userName };
                this.USERS.push(user);
                resolve(user);
            }
        }));

    }
}