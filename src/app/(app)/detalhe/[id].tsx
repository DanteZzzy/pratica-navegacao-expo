import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { buscarItem } from '@/data/itens';
import { MaxListWidth, Palette, Radius, Spacing } from '@/constants/theme';

export default function DetalhesItem() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = buscarItem(Number(id)); // o parâmetro chega como texto

  if (!item) {
    return (
      <View style={styles.vazio}>
        <Text style={styles.textoVazio}>Item não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.tela}>
      <View style={styles.coluna}>
        <View style={styles.cabecalho}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.tipo}>{item.tipo}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.rotulo}>Idade</Text>
          <Text style={styles.valor}>{item.idade}</Text>

          <Text style={styles.rotulo}>Sobre</Text>
          <Text style={styles.valor}>{item.descricao}</Text>

          <Text style={styles.id}>ID: {id}</Text>
        </View>
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
  cabecalho: {
    backgroundColor: Palette.primary,
    borderRadius: Radius.card,
    padding: Spacing.four,
    alignItems: 'center',
  },
  nome: {
    fontSize: 28,
    fontWeight: '700',
    color: Palette.onPrimary,
  },
  tipo: {
    marginTop: Spacing.one,
    color: Palette.onPrimary,
    opacity: 0.85,
  },
  card: {
    backgroundColor: Palette.surface,
    borderRadius: Radius.card,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  rotulo: {
    marginTop: Spacing.two,
    fontSize: 13,
    fontWeight: '700',
    color: Palette.textSecondary,
  },
  valor: {
    fontSize: 16,
    lineHeight: 24,
    color: Palette.text,
  },
  id: {
    marginTop: Spacing.three,
    fontSize: 12,
    color: Palette.textSecondary,
  },
  vazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoVazio: {
    color: Palette.textSecondary,
    fontSize: 16,
  },
});