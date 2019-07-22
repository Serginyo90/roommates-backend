export class CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly phoneCode: string;
  readonly isActive: boolean;
  readonly isBlocked: boolean;
}
