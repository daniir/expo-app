import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export function ScreenLayout({ children }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-gray-100"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {children}
    </View>
  );
}
