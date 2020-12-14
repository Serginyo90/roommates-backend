import { Message } from '../messages/message.entity';
import { User } from '../users/user.entity';

export class CreateConversationDto {
  readonly id: number;
  readonly title: string;
  readonly channelId: string;
  readonly messages: Message[];
  readonly creator: User;
  readonly users: User[];
  readonly lastViewedTime: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class SendMessageDto {
  readonly message: string;
}
