import { extendedClient } from '../prisma';
import { IAuth, ILoginUser, IRegisterUser } from '../types';

export const registerUser = async (user: IRegisterUser): Promise<boolean> => {
  const { firstName, lastName, email, password } = user;

  const userExist = await extendedClient.user.findFirst({
    where: {
      email,
    },
  });

  if (userExist) return false;

  await extendedClient.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });
  return true;
};

export const loginUser = async (user: ILoginUser): Promise<boolean | IAuth> => {
  const { email, password } = user;

  const userExist = await extendedClient.user.findFirst({
    where: {
      email,
      password,
    },
  });

  if (!userExist) return false;

  const userInfo: IAuth = {
    auth: {
      id: userExist.id,
      fullName: userExist.firstName + ' ' + userExist.lastName,
      isAuth: true,
    },
  };

  return userInfo;
};
