import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CryptoService } from './crypto/crypro.service';

@Module({
  controllers: [CoreController],
  providers: [CryptoService],
  exports: [CryptoService],
})
export class CoreModule {}
