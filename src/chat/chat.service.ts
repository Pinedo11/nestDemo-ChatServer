import { Component } from '@nestjs/common';
import { Message } from './types/Message.type';
@Component()
export class ChatService {
    messages:Message[] = [];

    getMessages ():Message[] {
        return this.messages;
    }

    storeMessage (message:Message) {
        this.messages.push(message);
    }
}