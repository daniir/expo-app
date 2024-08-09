import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-cyan-800"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {children}
    </View>
  );
}
