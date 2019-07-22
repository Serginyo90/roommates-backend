export class CreateUserDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly phoneCode: string;
  readonly isActivated: boolean;
  readonly isBlocked: boolean;
}
