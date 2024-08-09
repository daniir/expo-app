import { View, Text, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Registerform } from '../../../components';
import { ScreenLayout } from '../../../components/Layouts';

export default function index() {
  return (
    <ScreenLayout>
      <ScrollView>
        <View className="justify-center items-center">
          <Text className="text-justify text-lg my-10 mx-5">
            Favor de completar los siguientes campos para crear una nueva
            cuenta.
          </Text>
          <Registerform />
          <Pressable onPress={() => router.back()}>
            <Text className="mt-5 text-blue-900 inline-block font-bold underline">
              Inicia sesión
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
