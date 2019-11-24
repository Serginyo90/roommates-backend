import { UserRole } from './user.entity';
import { Conversation } from '../conversations/conversation.entity';
import { Message } from '../messages/message.entity';
import { SearchByDto } from './users.interface';

export class CreateUserDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly email: string;
  readonly phone: string;
  readonly phoneCode: string;
  readonly isActivated: boolean;
  readonly isBlocked: boolean;
  readonly role: UserRole;
  readonly conversations: Conversation[];
  readonly conversationsOwner: Conversation[];
  readonly messages: Message[];
  readonly createdAt: string;
  readonly updatedAt: string;
}

export class RegistrationUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly email: string;
  readonly allowExtraEmails: boolean;
}

export class FetchUsersDto {
  readonly userId: string;
  readonly searchBy: SearchByDto;
}
