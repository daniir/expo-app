import { View } from 'react-native';
import { Link } from 'expo-router';
import { AuthLayout } from '../../../components/Layouts';
import { FontAwesomeIcons, LoginForm } from '../../../components';

export default function index() {
  return (
    <AuthLayout>
      <View className="flex-1 justify-center items-center">
        <View className="mb-10">
          <FontAwesomeIcons name="user-circle" size={100} color="white" />
        </View>
        <LoginForm />
        <Link
          className="mt-5 text-white inline-block font-bold underline"
          href="auth/register"
        >
          Crear Cuenta
        </Link>
      </View>
    </AuthLayout>
  );
}
