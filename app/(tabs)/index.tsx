import { useCallback, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Stack, useFocusEffect } from 'expo-router';
import { ScreenLayout } from '../../components/Layouts';
import { CardPolicy, MCIcons } from '../../components';
import { useAuthContext } from '../../hooks';
import { IPolicyHistory } from '../../types';
import { getVehiclePolicies } from '../../database/policyQuery';

export default function index() {
  const [data, setData] = useState<IPolicyHistory[]>([]);
  const { auth, signOut } = useAuthContext();

  const focusEffect = useCallback(() => {
    const getDbData = async () => {
      try {
        const dbData = await getVehiclePolicies(auth?.auth.id!);
        setData(dbData);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    getDbData();
  }, []);

  useFocusEffect(focusEffect);

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#155e75' },
          headerTitle: 'Listado de pólizas',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => (
            <View>
              <Pressable className="mr-2" onPress={signOut}>
                <MCIcons name="logout" size={24} color="white" />
                <Text className="text-white">Salir</Text>
              </Pressable>
            </View>
          ),
        }}
      />
      <View className="flex-1 justify-center items-center">
        {data.length < 1 ? (
          <Text className="text-red-500 text-2xl">
            No hay pólizas registradas
          </Text>
        ) : (
          <FlatList
            data={data}
            renderItem={(data) => <CardPolicy policy={data.item} />}
            keyExtractor={(data) => data.id.toString()}
          />
        )}
      </View>
    </ScreenLayout>
  );
}
