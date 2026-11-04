import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '@/context/AuthContext';
import { MaxListWidth, Palette, Radius, Spacing } from '@/constants/theme';

export default function Perfil() {
  const { usuario, sair } = useAuth();

  return (
    <View style={styles.tela}>
      <View style={styles.coluna}>
        <View style={styles.card}>
          <Text style={styles.rotulo}>Usuário</Text>
          <Text style={styles.valor}>{usuario}</Text>
        </View>

        <TouchableOpacity style={styles.botaoSair} onPress={sair} activeOpacity={0.8}>
          <Text style={styles.textoSair}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.three,
  },
  coluna: {
    width: '100%',
    maxWidth: MaxListWidth,
    gap: Spacing.three,
  },
  card: {
    backgroundColor: Palette.surface,
    borderRadius: Radius.card,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  rotulo: {
    fontSize: 13,
    fontWeight: '700',
    color: Palette.textSecondary,
  },
  valor: {
    fontSize: 18,
    color: Palette.text,
  },
  botaoSair: {
    backgroundColor: Palette.danger,
    paddingVertical: Spacing.three,
    borderRadius: Radius.card,
    alignItems: 'center',
  },
  textoSair: {
    color: Palette.onPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
});