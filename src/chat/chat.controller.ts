import { Controller, Get, Response, HttpStatus } from 'nest.js';
import { messages } from 'nest.js/core/constants';
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