import * as sgMail from '@sendgrid/mail';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SendgridService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  public async sendConfirmEmail(email: string): Promise<boolean> {
    try {
      sgMail.setApiKey(this.configService.get('SENDGRID_API_KEY'));
      const msg = {
        to: email, // Change to your recipient
        from: 'support@findmyroommates.com', // Change to your verified sender
        templateId: 'd-6243d075b38a4790b9a13a558b8a5960',
        dynamic_template_data: {
          confirmLink: `${this.configService.get('DOMAIN')}/confirm?email=${encodeURIComponent(email)}`,
        },
      };
      return sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
          return true;
        })
        .catch((error) => {
          console.error(JSON.stringify(error));
          return false;
        });
    } catch (e) {
      console.log('__e__', JSON.stringify(e) );
    }
  }
}
