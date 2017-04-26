import { Module } from 'nest.js';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
    controllers: [ UserController ],
    components: [ UserService ],
    exports: [ UserService ]
})
export class UserModule {
}
