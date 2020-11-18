import { Module } from '@nestjs/common';
import * as Redis from 'ioredis';

import { CoreController } from './core.controller';
import { CryptoService } from './crypto/crypro.service';
import { SendgridService } from './sendgrid/sendgrid.service';
import { REDIS_TOKEN } from './core.constants';

const redisFactory = {
  provide: REDIS_TOKEN,
  useFactory: () => {
    return new Redis ();
  },
  inject: [],
};

@Module({
  controllers: [CoreController],
  providers: [CryptoService, SendgridService, redisFactory],
  exports: [CryptoService, redisFactory],
})
export class CoreModule {}
