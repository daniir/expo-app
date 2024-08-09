import { View, Text, Pressable } from 'react-native';
import { Link, router } from 'expo-router';
import { AuthLayout } from '../../../components/Layouts';
import { LoginForm } from '../../../components';

export default function index() {
  return (
    <AuthLayout>
      <View className="flex-1 justify-center items-center">
        <LoginForm />
        <Link
          className="mt-5 text-white inline-block font-bold underline"
          href="auth/register"
        >
          Crear cuenta
        </Link>
        <Pressable onPress={() => router.replace('/(tabs)')}>
          <Text className="mt-5 text-white inline-block font-bold">Index</Text>
        </Pressable>
      </View>
    </AuthLayout>
  );
}
