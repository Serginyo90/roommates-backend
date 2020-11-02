import * as Joi from '@hapi/joi';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';
import { CoreModule } from './core/core.module';
import { MeModule } from './me/me.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { CountriesModule } from './countries/countries.module';
import HttpExceptionFilter from './helpers/filters/http-exception.filter';

// connection config for db look here ormconfig.json @see https://docs.nestjs.com/techniques/database

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'staging')
          .default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().default(3306),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        validationOptions: {
          allowUnknown: false,
          abortEarly: true,
        },
        AWS_ACCESS_KEY_ID: Joi.string().required(),
        AWS_SECRET_ACCESS_KEY: Joi.string().required(),
        DOMAIN: Joi.string().required(),
        SENDGRID_API_KEY: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '**/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '../migrations/*{.ts,.js}'],
      synchronize: process.env.NODE_ENV !== 'production' ? true : false,
      logging: true,
    }), UsersModule, AuthModule, ConversationsModule, MessagesModule, CoreModule, MeModule, HobbiesModule, CountriesModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})
export class AppModule {}
