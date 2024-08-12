import { Pressable, Text } from 'react-native';
import React from 'react';
import { MCIcons } from '../Icons';

type Props = {
  deletePicture: () => void;
};

export function ReTakePhoto({ deletePicture }: Props) {
  return (
    <Pressable
      className="flex-row justify-center items-center"
      onPress={deletePicture}
    >
      <MCIcons name="camera-retake" size={25} color="white" />
      <Text className="font-bold text-sm text-white ml-3">Tomar de nuevo</Text>
    </Pressable>
  );
}
