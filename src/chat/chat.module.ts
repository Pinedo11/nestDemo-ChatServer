import { Module } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';

@Module(
    {
        controllers: [ ChatController ],
        components: [ ChatService, ChatGateway, UserService ]
    })
export class ChatModule {
}