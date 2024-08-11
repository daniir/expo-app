import { Prisma } from '@prisma/client';

export interface IPolicy {
  vehiculePrice: number;
  insuranceType: string;
  coverage: string;
  policyNumber: number;
  amount: number;
  vehicleId: string;
}

export interface IPolicyHistory {
  id: number;
  brand: string;
  model: string;
  policy: {
    createdAt: Date;
    amount: Prisma.Decimal;
  } | null;
}
