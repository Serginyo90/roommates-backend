import { IsEmail, IsString } from 'class-validator';

export class CreateSubscriberDto {
  @IsString()
  @IsEmail()
  readonly email: string;
}
