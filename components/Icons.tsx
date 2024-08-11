import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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

export function AntDisgnIcons({ name, size, color }: Props) {
  return <AntDesign name={name} size={size} color={color} />;
}

export function FontAwesomeIcons({ name, size, color }: Props) {
  return <FontAwesome name={name} size={size} color={color} />;
}
