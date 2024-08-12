import { View, Pressable } from 'react-native';
import { MIcons } from '../Icons';

type Props = {
  toggleFacingCamera: () => void;
};

export function FacingCamera({ toggleFacingCamera }: Props) {
  return (
    <View>
      <Pressable className="ml-3" onPress={toggleFacingCamera}>
        <MIcons name="flip-camera-android" size={24} color="white" />
      </Pressable>
    </View>
  );
}
