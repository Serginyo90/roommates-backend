import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

import { CoreController } from './core.controller';
import { CryptoService } from './crypto/crypro.service';
import { SESToken } from './constants';
import { SesService } from './aws/ses.service';

@Module({
  controllers: [CoreController],
  providers: [CryptoService,
    {
      provide: SESToken,
      useFactory: (configService: ConfigService) => {
        return new AWS.SES({
          credentials: {
            accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
          },
          apiVersion: '2010-12-01',
          region: 'eu-central-1',
        });
      },
      inject: [ConfigService],
    },
    SesService,
  ],
  exports: [CryptoService, SesService],
})
export class CoreModule {}
