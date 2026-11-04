import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { MaxFormWidth, Palette, Radius, Spacing } from '@/constants/theme';

export default function Login() {
  const router = useRouter();
  const { entrar } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || senha === '') {
      setErro('Preencha usuário e senha para entrar.');
      return;
    }
    setErro('');
    entrar(email.trim()); // guarda o usuário na sessão global
    router.replace('/'); // replace: o voltar não retorna ao login
  };

  return (
    <SafeAreaView style={styles.tela}>
      <KeyboardAvoidingView
        style={styles.conteudo}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.cartao}>
          <Text style={styles.titulo}>Acesso à Conta</Text>
          <Text style={styles.subtitulo}>Entre para continuar</Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="E-mail ou usuário"
              placeholderTextColor={Palette.textSecondary}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor={Palette.textSecondary}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />

            {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

            <TouchableOpacity style={styles.botao} onPress={handleLogin} activeOpacity={0.8}>
              <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.three,
  },
  cartao: {
    width: '100%',
    maxWidth: MaxFormWidth,
    backgroundColor: Palette.surface,
    borderRadius: Radius.card,
    padding: Spacing.four,
    // sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // sombra Android
    elevation: 3,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: Palette.primary,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: Palette.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.one,
    marginBottom: Spacing.four,
  },
  form: {
    gap: Spacing.three,
  },
  input: {
    backgroundColor: Palette.background,
    borderWidth: 1,
    borderColor: Palette.border,
    borderRadius: Radius.card,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    fontSize: 16,
    color: Palette.text,
  },
  erro: {
    color: Palette.danger,
    fontSize: 14,
  },
  botao: {
    backgroundColor: Palette.primary,
    paddingVertical: Spacing.three,
    borderRadius: Radius.card,
    alignItems: 'center',
    marginTop: Spacing.one,
  },
  textoBotao: {
    color: Palette.onPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
});