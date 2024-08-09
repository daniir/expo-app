import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  name: any;
  size: number;
  color: string;
};

export function MCIcons({ name, size, color }: Props) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}

export function MIcons({ name, size, color }: Props) {
  return <MaterialIcons name={name} size={size} color={color} />;
}

export function AntDisgn({ name, size, color }: Props) {
  return <AntDesign name={name} size={size} color={color} />;
}
