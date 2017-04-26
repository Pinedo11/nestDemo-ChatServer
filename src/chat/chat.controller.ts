import { Controller, Get } from 'nest.js';
import { messages } from 'nest.js/core/constants';
import { ChatService } from './chat.service';

@Controller({ path: 'messages' })
export class ChatController {

    constructor (private chatService:ChatService) {}

    @Get()
    async getAllMessages (req, res) {
        console.log('Hey');
        const messages = await this.chatService.getMessages();
        res.status(200).json(messages);
    }
}