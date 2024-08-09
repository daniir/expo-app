import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { ScreenLayout } from '../../../components/Layouts';
import { ModalInfo, QuoteForm } from '../../../components';
import { IModalInfo } from '../../../types';

export default function QouteForm() {
  const [vehicule, setVehicule] = useState<IModalInfo | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const submitData = (data: IModalInfo) => {
    setVehicule(data);
  };

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerTitle: 'Formulario de cotización',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <ScrollView>
        <View className="mx-2 mb-8">
          <Text className="text-justify">
            Favor de completar el siguiente formulario con los datos necesarios
            de su vehículo y el tipo de seguro y covertura que desea adquirir
            para generar una cotización.
          </Text>
        </View>
        <View className="flex-1 justify-center items-center">
          <QuoteForm submitData={submitData} handleModal={handleModal} />
          {openModal && vehicule && (
            <ModalInfo
              openModal={openModal}
              closeModal={handleModal}
              modalInfo={vehicule}
            />
          )}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
