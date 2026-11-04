export type Item = {
  id: number;
  nome: string;
  tipo: string;
  idade: string;
  descricao: string;
};

export const ITENS: Item[] = [
  { id: 1, nome: 'Rex', tipo: 'Cachorro', idade: '3 anos', descricao: 'Brincalhão, adora passear e buscar bolinha.' },
  { id: 2, nome: 'Mel', tipo: 'Gata', idade: '2 anos', descricao: 'Calma e carinhosa, dorme boa parte do dia.' },
  { id: 3, nome: 'Thor', tipo: 'Cachorro', idade: '5 anos', descricao: 'Grande e tranquilo, ótimo com crianças.' },
  { id: 4, nome: 'Luna', tipo: 'Coelha', idade: '1 ano', descricao: 'Curiosa e muito ativa.' },
];

export const buscarItem = (id: number) => ITENS.find((item) => item.id === id);