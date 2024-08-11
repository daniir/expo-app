import { extendedClient } from '../prisma';
import { IPolicyHistory } from '../types';

export const getVehiclePolicies = async (
  id: number
): Promise<IPolicyHistory[]> => {
  const vehiclePolicies = await extendedClient.vehicle.findMany({
    select: {
      id: true,
      brand: true,
      model: true,
      policy: {
        select: {
          createdAt: true,
          amount: true,
        },
      },
    },
    where: {
      ownerId: id,
    },
  });

  if (!vehiclePolicies) return [];

  return vehiclePolicies;
};
