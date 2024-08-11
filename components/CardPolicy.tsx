import React from 'react';
import { View, Text } from 'react-native';
import { IPolicyHistory } from '../types';
import { dateTimeConvert } from '../utils';

type Props = {
  policy: IPolicyHistory;
};

export function CardPolicy({ policy }: Props) {
  return (
    <View className="border border-gray-400 shadow-md rounded-lg w-[350px] p-3 mb-2.5">
      <View className="bg-cyan-600 p-1.5 rounded-md">
        <Text className="text-white font-bold text-center">
          {policy.brand} {policy.model}
        </Text>
      </View>
      <View className="mt-3">
        <Text>Monto: ${policy.policy?.amount.toFixed(2)}</Text>
        <Text>
          Fecha de creación: {dateTimeConvert(policy.policy?.createdAt!)}
        </Text>
      </View>
    </View>
  );
}
