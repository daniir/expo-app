import { View } from 'react-native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#155e75' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: '',
        }}
      >
        <Stack.Screen
          name="auth/login/index"
          options={{
            headerTitle: 'Inicio de sesión',
          }}
        />
        <Stack.Screen
          name="auth/register/index"
          options={{
            headerTitle: 'Registro de usuario',
          }}
        />
      </Stack>
    </View>
  );
}
