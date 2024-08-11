import { extendedClient } from '../prisma';

export const generateSequence = async (): Promise<number> => {
  const { currentNumber } = await extendedClient.sequential.upsert({
    where: {
      id: 1,
    },
    update: {
      currentNumber: { increment: 1 },
    },
    create: {
      currentNumber: 1,
    },
  });

  return currentNumber;
};
