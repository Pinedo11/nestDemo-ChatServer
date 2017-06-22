import { Controller, Get, Response, HttpStatus } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('messages')
export class ChatController {

    constructor (private chatService:ChatService) {}

    @Get()
    async getAllMessages (@Response() res) {
        const messages = await this.chatService.getMessages();
        res.status(HttpStatus.OK).json(messages);
    }
}