import { Redirect, Tabs } from 'expo-router';
import { AntDisgnIcons, MIcons } from '../../components';
import { ModalProvider } from '../../context/modal/ModalProvider';
import { useAuthContext } from '../../hooks';

export default function TabsLayout() {
  const { auth } = useAuthContext();

  if (!auth?.auth) return <Redirect href="/auth/login" />;

  return (
    <ModalProvider>
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
            tabBarIcon: ({ color }) => (
              <AntDisgnIcons name="form" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </ModalProvider>
  );
}
