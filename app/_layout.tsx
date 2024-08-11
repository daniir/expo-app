import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { initializeDb } from '../prisma';
import { useAuthContext } from '../hooks';
import { AuthProvider } from '../context/auth/AuthProvider';

export default function Layout() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { auth } = useAuthContext();

  if (auth?.auth) return <Redirect href="/(tabs)" />;

  useEffect(() => {
    const setUp = async () => {
      try {
        await initializeDb();
        console.log('Database initialized');
      } catch (error) {
        console.log(`Error db: ${error}`);
      }

      setIsLoading(false);
    };

    setUp();
  }, []);

  if (isLoading)
    return (
      <View className="flex-1 justify-center items-center bg-gray-600 opacity-70">
        <Text>...Iniciando aplicación...</Text>
      </View>
    );

  return (
    <AuthProvider>
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
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </AuthProvider>
  );
}
