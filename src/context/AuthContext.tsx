import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  usuario: string | null;
  entrar: (nome: string) => void;
  sair: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(null);
  const entrar = (nome: string) => setUsuario(nome);
  const sair = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;