import { View, Pressable } from 'react-native';
import { MIcons } from '../Icons';

type Props = {
  flashIconName: string;
  toggleFlashCamera: () => void;
};

export function FlashCamera({ flashIconName, toggleFlashCamera }: Props) {
  return (
    <View>
      <Pressable className="mr-4" onPress={toggleFlashCamera}>
        <MIcons name={flashIconName} size={24} color="white" />
      </Pressable>
    </View>
  );
}
