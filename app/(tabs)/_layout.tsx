import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { AntDisgn, MIcons } from '../../components';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#d1d5db' },
        tabBarActiveTintColor: '#0891b2',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quote/index"
        options={{
          title: 'Cotizar',
          headerTitle: 'Formulario de cotización',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <AntDisgn name="form" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
