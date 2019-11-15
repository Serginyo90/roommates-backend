export class UpdateProfileDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly description: string;
  readonly phoneCode: string;
  readonly phone: string;
  readonly hobbies: [];
}

export interface UpdatePasswordDto {
  readonly oldPassword: string;
  readonly newPassword: string;
  readonly confirmPassword: string;
}
