import { Pressable, Text } from 'react-native';
import { MIcons } from '../Icons';

type Props = {
  savePicture: () => Promise<void>;
};

export function SavePhoto({ savePicture }: Props) {
  return (
    <Pressable
      className="flex-row justify-center items-center"
      onPress={savePicture}
    >
      <MIcons name="save" size={25} color="white" />
      <Text className="font-bold text-sm text-white ml-3">Guardar</Text>
    </Pressable>
  );
}
