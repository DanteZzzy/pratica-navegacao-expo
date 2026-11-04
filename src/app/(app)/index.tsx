import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Principal (Home)</Text>
      <Button title="Ir para Detalhes" onPress={() => router.push('/detalhe')} />
    </View>
  );
}