import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { IModalInfo, IQuoteForm } from '../types';
import { coverageList, insuranceTypeList } from '../data';
import { MCIcons, MIcons } from './Icons';
import { useAuthContext, useModalContext } from '../hooks';
import { generateSequence } from '../database/sequentialQuery';

type Props = {
  submitData: (data: IModalInfo) => void;
};

export function QuoteForm({ submitData }: Props) {
  const [openType, setOpenType] = useState<boolean>(false);
  const [openCoverage, setOpenCoverage] = useState<boolean>(false);

  const { auth } = useAuthContext();
  const { handleModal } = useModalContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IQuoteForm>();

  const onSubmit: SubmitHandler<IQuoteForm> = async (data) => {
    const { brand, model, year, price, insuranceType, coverage } = data;

    const yearsDifferences = new Date().getFullYear() - data.year;
    const years = yearsDifferences <= 0 ? 1 : yearsDifferences;
    const amount = (price / years) * 0.035;
    const sequential = await generateSequence();

    const modalInfo: IModalInfo = {
      brand,
      model,
      year,
      price,
      insuranceType,
      coverage,
      amount,
      sequential,
      fullName: auth?.auth.fullName!,
    };

    submitData(modalInfo);
    handleModal();

    reset();
  };

  return (
    <View className="w-[300px]">
      <Controller
        control={control}
        name="brand"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
          minLength: {
            value: 3,
            message: 'Se requieren mínimo 3 carácteres',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <Text className="w-1/6">
              <MCIcons name="car" size={24} color="black" />
            </Text>
            <TextInput
              className="text-center border border-gray-500 rounded-md w-5/6 p-1.5 my-2"
              placeholder="Marca del vehículo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
      />

      {errors.brand?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.brand.message}
        </Text>
      )}

      <Controller
        control={control}
        name="model"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
          minLength: {
            value: 3,
            message: 'Se requieren mínimo 3 carácteres',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <Text className="w-1/6">
              <MCIcons name="car-info" size={24} color="black" />
            </Text>
            <TextInput
              className="text-center border border-gray-500 rounded-md w-5/6 p-1.5 my-2"
              placeholder="Modelo del vehículo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
      />

      {errors.model?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.model.message}
        </Text>
      )}

      <Controller
        control={control}
        name="year"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <Text className="w-1/6">
              <MCIcons name="calendar-month-outline" size={24} color="black" />
            </Text>
            <TextInput
              className="text-center border border-gray-500 rounded-md w-5/6 p-1.5 my-2"
              placeholder="Año"
              keyboardType="number-pad"
              maxLength={4}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value?.toString()}
            />
          </View>
        )}
      />

      {errors.year?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.year.message}
        </Text>
      )}

      <Controller
        control={control}
        name="price"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
          min: {
            value: 1,
            message: 'Valor de campo no permitido',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <Text className="w-1/6">
              <MIcons name="attach-money" size={24} color="black" />
            </Text>
            <TextInput
              className="text-center border border-gray-500 rounded-md w-5/6 p-1.5 my-2"
              placeholder="Precio"
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value?.toString()}
            />
          </View>
        )}
      />

      {errors.price?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.price.message}
        </Text>
      )}

      <Controller
        control={control}
        name="insuranceType"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <View className="flex-row justify-between items-center">
            <Text className="w-1/6">
              <MCIcons name="format-list-bulleted" size={24} color="black" />
            </Text>
            <DropDownPicker
              placeholder="Seleccione el tipo de seguro"
              style={style.baseContent}
              placeholderStyle={style.listText}
              textStyle={style.listText}
              dropDownContainerStyle={style.size}
              open={openType}
              setOpen={() => setOpenType(!openType)}
              items={insuranceTypeList}
              value={value}
              setValue={(item: any) => onChange(item())}
              zIndex={3000}
              zIndexInverse={1000}
              listMode="MODAL"
              modalTitle="Seleccione el tipo de seguro"
            />
          </View>
        )}
      />

      {errors.insuranceType?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.insuranceType.message}
        </Text>
      )}

      <Controller
        control={control}
        name="coverage"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <View className="flex-row justify-between items-center">
            <Text className="w-1/6">
              <MCIcons name="format-list-bulleted" size={24} color="black" />
            </Text>
            <DropDownPicker
              placeholder="Seleccione el tipo de cobertura"
              style={style.baseContent}
              placeholderStyle={style.listText}
              textStyle={style.listText}
              dropDownContainerStyle={style.size}
              open={openCoverage}
              setOpen={() => setOpenCoverage(!openCoverage)}
              items={coverageList}
              value={value}
              setValue={(item: any) => onChange(item())}
              zIndex={2000}
              zIndexInverse={2000}
              listMode="MODAL"
              modalTitle="Seleccione el tipo de cobertura"
            />
          </View>
        )}
      />

      {errors.coverage?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.coverage.message}
        </Text>
      )}

      <Pressable
        className="bg-cyan-800 rounded-lg p-2 mt-5"
        onPress={handleSubmit(onSubmit)}
      >
        <View className="flex-row justify-center items-center w-full">
          <MCIcons name="send-circle-outline" size={24} color="white" />
          <Text className="text-white text-center font-bold ml-2">
            Generar cotización
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  baseContent: {
    borderColor: '#6b7280',
    backgroundColor: '#f3f4f6',
    width: 250,
    borderRadius: 8,
    padding: 6,
    marginVertical: 8,
  },
  listText: {
    color: 'gray',
    textAlign: 'center',
  },
  size: {
    width: 250,
  },
});
