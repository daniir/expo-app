import { useState, useRef } from 'react';
import { Stack, router } from 'expo-router';
import { View, Text, Pressable, Image, Alert } from 'react-native';
import {
  CameraView,
  CameraType,
  useCameraPermissions,
  FlashMode,
} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MIcons } from '../../components';
import {
  FacingCamera,
  FlashCamera,
  NoCameraAccess,
  ReTakePhoto,
  SavePhoto,
  TakePhoto,
} from '../../components/camera';

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [flash, setFlash] = useState<FlashMode>('off');
  const [permission, requestCameraPermission] = useCameraPermissions();
  const [permissionResponse, requestMediaLibraryPermission] =
    MediaLibrary.usePermissions();
  const cameraRef = useRef<any>(null);
  const [photo, setPhoto] = useState(null);

  const getPermissions = async () => {
    await requestCameraPermission();
    await requestMediaLibraryPermission();
  };

  const toggleFacingCamera = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const toggleFlashCamera = () => {
    setFlash((current) => (current === 'off' ? 'on' : 'off'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setPhoto(uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deletePicture = () => setPhoto(null);

  const savePicture = async () => {
    if (photo) {
      try {
        await MediaLibrary.createAssetAsync(photo);
        Alert.alert(
          'Imagen guardada',
          'Se han guardada la imagen en la galería de fotos'
        );
        setPhoto(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#155e75' },
            headerTitle: 'Cámara',
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
        <NoCameraAccess getPermissions={getPermissions} />
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: 'black' },
          headerTitle: '',
          headerLeft: () => (
            <View>
              <Pressable className="ml-1.5" onPress={() => router.back()}>
                <MIcons name="arrow-back" size={24} color="white" />
              </Pressable>
            </View>
          ),
          headerRight: () => (
            <View className="flex-row mr-1.5">
              <FlashCamera
                flashIconName={flash === 'on' ? 'flash-on' : 'flash-off'}
                toggleFlashCamera={toggleFlashCamera}
              />
              <FacingCamera toggleFacingCamera={toggleFacingCamera} />
            </View>
          ),
        }}
      />
      <View className="flex-1">
        {!photo ? (
          <CameraView
            className="flex-1"
            facing={facing}
            flash={flash}
            ref={cameraRef}
          />
        ) : (
          <Image className="flex-1" source={{ uri: photo }} />
        )}
        <View>
          {!photo ? (
            <TakePhoto takePicture={takePicture} />
          ) : (
            <View className="flex-row justify-between items-center bg-black p-6 w-full">
              <ReTakePhoto deletePicture={deletePicture} />
              <SavePhoto savePicture={savePicture} />
            </View>
          )}
        </View>
      </View>
    </>
  );
}
