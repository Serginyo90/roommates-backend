export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCode: string;
  isActivated: boolean;
  isBlocked: boolean;
}

export interface SearchByDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
}
