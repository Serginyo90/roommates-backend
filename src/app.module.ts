import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

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
      synchronize: true,
    }), UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
