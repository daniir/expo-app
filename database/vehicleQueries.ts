import { extendedClient } from '../prisma';
import { IVehicle } from '../types/';

export const createVehicle = async (vehicle: IVehicle): Promise<boolean> => {
  const vehiculeData = await extendedClient.vehicle.create({
    data: {
      brand: vehicle.brand,
      model: vehicle.model,
      year: +vehicle.year,
      ownerId: vehicle.ownerId,
    },
  });

  const { id: vehicleId } = vehiculeData;

  await extendedClient.policy.create({
    data: {
      policyNumber: vehicle.sequential,
      vehiclePrice: +vehicle.price,
      insuranceType: vehicle.insuranceType,
      coverage: vehicle.coverage,
      amount: vehicle.amount,
      vehicleId,
    },
  });

  return true;
};
