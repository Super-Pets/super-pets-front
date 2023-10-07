export type Species =
  | 'Cachorro'
  | 'Gato'
  | 'Coelho'
  | 'Cobra'
  | 'Ave'
  | 'Primata'
  | 'Roedor';

export type Gender = 'Feminino' | 'Masculino';

export type Size = 'Pequeno' | 'Médio' | 'Grande';

export interface IAnimals {
  id: number,
  name: string;
  description: string;
  species: Species;
  gender: Gender;
  age: number;
  size: Size;
  local: string;
  vaccines: string;
  castration: boolean;
}

export interface IImages {
  species: Species;
  img: string;
}
