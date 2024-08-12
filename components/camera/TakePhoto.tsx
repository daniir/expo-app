import { Pressable, Text } from 'react-native';
import React from 'react';
import { MIcons } from '../Icons';

type Props = {
  takePicture: () => Promise<void>;
};

export function TakePhoto({ takePicture }: Props) {
  return (
    <Pressable
      className="flex-row justify-center items-center bg-black p-6 w-full"
      onPress={takePicture}
    >
      <MIcons name="camera" size={30} color="white" />
      <Text className="font-bold text-xl text-white ml-5">Tomar foto</Text>
    </Pressable>
  );
}
