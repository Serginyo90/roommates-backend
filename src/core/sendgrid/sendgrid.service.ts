import * as sgMail from '@sendgrid/mail';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../../users/user.entity';

@Injectable()
export class SendgridService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  public async sendConfirmEmail(user: User): Promise<boolean> {
    try {
      sgMail.setApiKey(this.configService.get('SENDGRID_API_KEY'));
      const msg = {
        to: user.email, // Change to your recipient
        from: 'support@findmyroommates.com', // Change to your verified sender
        templateId: 'd-6243d075b38a4790b9a13a558b8a5960',
        dynamic_template_data: {
          confirmLink: `${this.configService.get('DOMAIN')}/confirm?email=${encodeURIComponent(user.email)}`,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      };
      return sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
          return true;
        })
        .catch((error) => {
          console.error(error);
          return false;
        });
    } catch (e) {
      console.log('__e__', JSON.stringify(e) );
    }
  }

  public async sendResetPasswordEmail(user: User, token: string): Promise<boolean> {
    try {
      sgMail.setApiKey(this.configService.get('SENDGRID_API_KEY'));
      const msg = {
        to: user.email, // Change to your recipient
        from: 'support@findmyroommates.com', // Change to your verified sender
        templateId: 'd-11609a0a509e4102a1d4d693ade7c459',
        dynamic_template_data: {
          resetPasswordLink: `${this.configService.get('DOMAIN')}/reset-password-confirm?token=${encodeURIComponent(token)}`,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      };
      return sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
          return true;
        })
        .catch((error) => {
          console.error(error);
          return false;
        });
    } catch (e) {
      console.log('__e__', e);
    }
  }
}
