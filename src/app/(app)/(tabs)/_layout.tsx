import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { Palette } from '@/constants/theme';

const icone = (emoji: string) => () => <Text style={{ fontSize: 20 }}>{emoji}</Text>;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: Palette.primary },
        headerTintColor: Palette.onPrimary,
        headerTitleStyle: { fontWeight: '700' },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Palette.primary,
        tabBarInactiveTintColor: Palette.textSecondary,
        tabBarStyle: { backgroundColor: Palette.surface, borderTopColor: Palette.border },
        sceneStyle: { backgroundColor: Palette.background },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Início', tabBarIcon: icone('🏠') }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarIcon: icone('👤') }} />
    </Tabs>
  );
}