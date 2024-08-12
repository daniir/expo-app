import { View, Text, Pressable } from 'react-native';
import { MIcons } from '../Icons';

type Props = {
  getPermissions: () => Promise<void>;
};

export function NoCameraAccess({ getPermissions }: Props) {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-justify mx-4 mb-4">
        Para poder tomar fotos es necesario conceder los permisos a la cámara y
        la galería del dispositivo.
      </Text>
      <Pressable
        className="bg-cyan-800 border border-cyan-800 rounded-xl p-2"
        onPress={getPermissions}
      >
        <View className="flex-row justify-center items-center">
          <MIcons name="lock" size={24} color="white" />
          <Text className="text-white text-center font-bold ml-2.5">
            Conceder permisos
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
