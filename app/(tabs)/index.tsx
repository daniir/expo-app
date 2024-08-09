import { Pressable, Text, View } from 'react-native';
import { Link, router } from 'expo-router';
import { ScreenLayout } from '../../components/Layouts';

export default function index() {
  return (
    <ScreenLayout>
      <View className="flex-1 justify-center items-center">
        <Text className="text-black text-3xl">Index Home</Text>
        <Link href="/quote">Formulario</Link>
        <Pressable onPress={() => router.replace('/auth/login')}>
          <Text className="mt-5 text-black inline-block font-bold">Login</Text>
        </Pressable>
      </View>
    </ScreenLayout>
  );
}
