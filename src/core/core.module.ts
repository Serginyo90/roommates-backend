import { Module } from '@nestjs/common';

import { CoreController } from './core.controller';
import { CryptoService } from './crypto/crypro.service';
import { SendgridService } from './sendgrid/sendgrid.service';

@Module({
  controllers: [CoreController],
  providers: [CryptoService, SendgridService ],
  exports: [CryptoService],
})
export class CoreModule {}
