import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { IModalInfo } from '../types';
import { MIcons } from './Icons';

type Props = {
  modalInfo: IModalInfo;
  openModal: boolean;
  closeModal: () => void;
};

export function ModalInfo({ modalInfo, openModal, closeModal }: Props) {
  const { fullName, amount, model, sequential } = modalInfo;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={openModal}
      onRequestClose={closeModal}
    >
      <View className="flex-1 justify-center items-center bg-black opacity-90">
        <View className="bg-white rounded-lg p-5 w-[300px]">
          <Text className="font-bold text-xl text-center mb-5">
            Datos de la póliza
          </Text>
          <View>
            <Text className="font-bold capitalize">
              Nombre: <Text className="font-normal items-end"> {fullName}</Text>
            </Text>
            <Text className="font-bold capitalize">
              Número de póliza:
              <Text className="font-normal"> {sequential}</Text>
            </Text>
            <Text className="font-bold capitalize">
              Marca:
              <Text className="font-normal"> {model}</Text>
            </Text>
            <Text className="font-bold capitalize">
              Monto:
              <Text className="font-normal"> ${amount.toFixed(2)}</Text>
            </Text>
          </View>
          <Pressable
            className="border rounded-lg border-cyan-800 bg-cyan-800 mt-4 p-2.5"
            onPress={closeModal}
          >
            <View className="flex-row justify-center items-center w-full">
              <MIcons name="save" size={24} color="white" />
              <Text className="text-white text-center font-bold ml-2">
                Guardar cotizaión
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
