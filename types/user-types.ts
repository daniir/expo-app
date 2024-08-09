export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser extends ILoginUser {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}
