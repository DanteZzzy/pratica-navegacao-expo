import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { ITENS, type Item } from '@/data/itens';
import { MaxListWidth, Palette, Radius, Spacing } from '@/constants/theme';

export default function Home() {
  const router = useRouter();
  const { usuario } = useAuth();

  const abrirDetalhe = (item: Item) =>
    router.push({ pathname: '/detalhe/[id]', params: { id: String(item.id) } });

  return (
    <FlatList
      data={ITENS}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.lista}
      ListHeaderComponent={
        <View style={styles.banner}>
          <Text style={styles.saudacao} numberOfLines={1}>
            Olá, {usuario}!
          </Text>
          <Text style={styles.chamada}>Escolha um pet para ver os detalhes</Text>
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => abrirDetalhe(item)}
        >
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.meta}>
            {item.tipo} · {item.idade}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    width: '100%',
    maxWidth: MaxListWidth,
    alignSelf: 'center',
    padding: Spacing.three,
    gap: Spacing.three,
  },
  banner: {
    backgroundColor: Palette.primary,
    borderRadius: Radius.card,
    padding: Spacing.four,
  },
  saudacao: {
    fontSize: 22,
    fontWeight: '700',
    color: Palette.onPrimary,
  },
  chamada: {
    marginTop: Spacing.one,
    color: Palette.onPrimary,
    opacity: 0.85,
  },
  card: {
    backgroundColor: Palette.surface,
    borderRadius: Radius.card,
    padding: Spacing.three,
    // sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // sombra Android
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: '700',
    color: Palette.primary,
  },
  meta: {
    marginTop: Spacing.one,
    color: Palette.textSecondary,
  },
});