export interface IAnimals {
  name: string;
  description: string;
  species: string;
  gender: string;
  age: number;
  size: string;
  local: string;
  vaccines: string;
  castration: boolean;
}

export const species: string[] = ['Cachorro', 'Gato', 'Coelho', 'Ave'];

export const gender: string[] = ['Feminino', 'Masculino'];

export const sizes: string[] = ['Pequeno', 'Médio', 'Grande'];

export const castration: string[] = ['Sim', 'Não'];
