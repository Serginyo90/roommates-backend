import { HttpException, HttpStatus } from '@nestjs/common';

export class BadDataException extends HttpException {
  constructor(message: string) {
    super({
      message: message || 'Bad Data Request',
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      error: 'Bad Data Request',
    }, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
