import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ILoginUser } from '../types';

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginUser>();

  const onSubmit: SubmitHandler<ILoginUser> = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <View className="w-[300px]">
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
              className="text-center border border-white bg-white rounded-md w-full p-1.5 my-2"
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
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <View className="flex-row justify-between items-center">
            <TextInput
              className="text-center border border-white bg-white rounded-md w-full p-1.5 my-2"
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

      <Pressable
        className="inline-block border p-4 rounded-md mt-8 border-slate-900 bg-slate-900"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-center text-white font-bold">Iniciar sesión</Text>
      </Pressable>
    </View>
  );
}
