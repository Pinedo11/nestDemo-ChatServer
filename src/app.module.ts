import { Module } from 'nest.js';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';


@Module({
    modules: [ UserModule, ChatModule ]
})
export class ApplicationModule {
}
