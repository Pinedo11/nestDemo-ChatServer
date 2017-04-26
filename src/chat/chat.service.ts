import { Component } from 'nest.js';
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