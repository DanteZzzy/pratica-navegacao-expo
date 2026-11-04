import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { Palette } from '@/constants/theme';

export default function AppLayout() {
  const { usuario } = useAuth();

  // Sem sessão ativa → login
  if (!usuario) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Palette.primary },
        headerTintColor: Palette.onPrimary,
        headerTitleStyle: { fontWeight: '700' },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Palette.background },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="detalhe/[id]" options={{ title: 'Detalhe' }} />
    </Stack>
  );
}