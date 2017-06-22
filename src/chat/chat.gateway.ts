import { NestGateway, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { User } from '../user/types/User.type';
import { ChatService } from './chat.service';
import { Message } from './types/Message.type';
import Socket = SocketIO.Socket;


@WebSocketGateway({ port: 1080, namespace: 'messages' })
export class ChatGateway implements NestGateway {

    socket:Socket;

    constructor (private chatService:ChatService) {}

    afterInit (server) {}

    handleConnection (socket) {
        this.socket = socket;
        process.nextTick(() => {
            socket.emit('allMessages', this.chatService.getMessages());
        });
    }

    handleDisconnect (socket) {}

    @SubscribeMessage({ value: 'data' })
    handleGetAddMessage (sender, message:Message) {
        this.chatService.storeMessage(message);
        sender.emit('newMessage', message);
        sender.broadcast.emit('newMessage', message);
    }

    @SubscribeMessage({ value: 'isWriting' })
    handleIsWriting (sender, user:User) {
        sender.broadcast.emit('isWriting', user);
    }

    @SubscribeMessage({ value: 'isNotWriting' })
    handleIsNotWriting (sender) {
        sender.broadcast.emit('isNotWriting');
    }
}