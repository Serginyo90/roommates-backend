import { Controller, Post, Body } from '@nestjs/common';

import { SubscribersService } from './subscribers.service';
import { CreateSubscriberDto } from './subscribers.dto';

@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @Post()
  async create(@Body() dto: CreateSubscriberDto) {
    return await this.subscribersService.create(dto);
  }
}
