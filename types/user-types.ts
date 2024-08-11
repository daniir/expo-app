export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser extends ILoginUser {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface IAuth {
  auth: {
    id: number;
    fullName: string;
    isAuth: boolean;
  };
}
