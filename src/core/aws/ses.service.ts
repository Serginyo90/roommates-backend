import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

import { SESToken } from '../constants';

@Injectable()
export class SesService {
  constructor(
    @Inject(SESToken) private readonly ses: AWS.SES,
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  public async sendEmail(email: string) {
    // TODO: Mut be added token to confirm email
    await this.ses.verifyEmailAddress({ EmailAddress: email }).promise();
    // const params1 = {
    //   Destination: {
    //     BccAddresses: [
    //     ],
    //     CcAddresses: [
    //       'recipient3@example.com',
    //     ],
    //     ToAddresses: [
    //       'recipient1@example.com',
    //       'recipient2@example.com',
    //     ],
    //   },
    //   Message: {
    //     Body: {
    //       Html: {
    //         Charset: 'UTF-8',
    //         Data: 'This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\'ulink\' href=\'http://docs.aws.amazon.com/ses/latest/DeveloperGuide\' target=\'_blank\'>Amazon SES Developer Guide</a>.',
    //       },
    //       Text: {
    //         Charset: 'UTF-8',
    //         Data: 'This is the message body in text format.'
    //       },
    //     },
    //     Subject: {
    //       Charset: 'UTF-8',
    //       Data: 'Test email',
    //     },
    //   },
    //   ReplyToAddresses: [
    //   ],
    //   ReturnPath: '',
    //   ReturnPathArn: '',
    //   Source: 'sender@example.com',
    //   SourceArn: '',
    // };

    const params = {
      Source: 'support@findmyroommates.com',
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: 'Welcome to FindMyRoommates',
        },
        Body: {
          Text: {
            Data: `Welcome to FindMyRoommates. Please don\'t respond on this email. Please confirm your email by clicking on ${this.configService.get('MAIN_ENDPOINT')}/users/confirm?email=${encodeURIComponent(email)}`,
          },
        },
      },
    };

    return this.ses.sendEmail(params).promise();
  }
}
