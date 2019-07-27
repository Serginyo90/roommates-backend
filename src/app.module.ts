import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';

// connection config for db look here ormconfig.json @see https://docs.nestjs.com/techniques/database

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'cuw_dev',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '../migrations/*{.ts,.js}'],
      synchronize: true,
    }), UsersModule, AuthModule, ConfigModule, ConversationsModule, MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
