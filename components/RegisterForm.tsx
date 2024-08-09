import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { IRegisterUser } from '../types';

export function Registerform() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<IRegisterUser>();

  const onSubmit: SubmitHandler<IRegisterUser> = (data) => {
    console.log({ data });
  };

  return (
    <View className="w-[350px]">
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <TextInput
              className="text-center border border-gray-200 bg-gray-200 rounded-md w-full p-1.5 my-2"
              placeholder="Nombre"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
      />
      {errors.firstName?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.firstName.message}
        </Text>
      )}

      <Controller
        control={control}
        name="lastName"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <TextInput
              className="text-center border border-gray-200 bg-gray-200 rounded-md w-full p-1.5 my-2"
              placeholder="Apellido"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
      />
      {errors.lastName?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.lastName.message}
        </Text>
      )}

      <Controller
        control={control}
        name="email"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:
              'Por favor ingresar una dirección de correo electrónico valido',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <TextInput
              className="text-center border border-gray-200 bg-gray-200 rounded-md w-full p-1.5 my-2"
              placeholder="usuario@correo.com"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
      />
      {errors.email?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.email.message}
        </Text>
      )}

      <Controller
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
          minLength: {
            value: 4,
            message: 'La contraseña debe ser de al menos 4 carácteres',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <TextInput
              className="text-center border border-gray-200 bg-gray-200 rounded-md w-full p-1.5 my-2"
              placeholder="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          </View>
        )}
      />
      {errors.password?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.password.message}
        </Text>
      )}

      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: {
            value: true,
            message: 'Campo requerido',
          },
          validate: (value: string) => {
            if (watch('password') !== value) {
              return 'La contraseña no coincide';
            }
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <TextInput
              className="text-center border border-gray-200 bg-gray-200 rounded-md w-full p-1.5 my-2"
              placeholder="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          </View>
        )}
      />
      {errors.confirmPassword?.message && (
        <Text className="text-red-500 text-center font-bold">
          {errors.confirmPassword.message}
        </Text>
      )}

      <Pressable
        className="inline-block border p-4 rounded-md mt-8 border-slate-900 bg-slate-900"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-center text-white font-bold">Crear usuario</Text>
      </Pressable>
    </View>
  );
}
