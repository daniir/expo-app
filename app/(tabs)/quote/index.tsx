import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, Stack } from 'expo-router';
import { ScreenLayout } from '../../../components/Layouts';
import { MIcons, ModalInfo, QuoteForm } from '../../../components';
import { IModalInfo } from '../../../types';
import { useModalContext } from '../../../hooks';

export default function QouteForm() {
  const [vehicle, setVehicle] = useState<IModalInfo | null>(null);
  const { openModal } = useModalContext();

  const submitData = (data: IModalInfo) => {
    setVehicle(data);
  };

  return (
    <ScreenLayout>
      <ScrollView>
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#155e75' },
            headerTitle: 'Formulario de cotización',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' },
            headerLeft: () => (
              <View>
                <Pressable className="ml-1.5" onPress={() => router.back()}>
                  <MIcons name="arrow-back" size={24} color="white" />
                </Pressable>
              </View>
            ),
          }}
        />
        <View className="mx-2 mb-8">
          <Text className="text-justify">
            Favor de completar el siguiente formulario con los datos necesarios
            de su vehículo y el tipo de seguro y covertura que desea adquirir
            para generar una cotización.
          </Text>
        </View>
        <View className="flex-1 justify-center items-center">
          <QuoteForm submitData={submitData} />
          {openModal && vehicle && <ModalInfo modalInfo={vehicle} />}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
