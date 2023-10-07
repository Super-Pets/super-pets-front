import { IImages, Species, Gender, Size } from '../models/animals';

export const species: Species[] = [
  'Cachorro',
  'Gato',
  'Coelho',
  'Cobra',
  'Ave',
  'Primata',
  'Roedor',
];

export const gender: Gender[] = ['Feminino', 'Masculino'];

export const sizes: Size[] = ['Pequeno', 'Médio', 'Grande'];

export const castration: string[] = ['Sim', 'Não'];

export const animalImages: IImages[] = [
  {
    species: 'Cachorro',
    img: '../assets/dog.webp',
  },
  {
    species: 'Gato',
    img: '../assets/cat.webp',
  },
  {
    species: 'Coelho',
    img: '../assets/rabbit.webp',
  },
  {
    species: 'Cobra',
    img: '../assets/snake.webp',
  },
  {
    species: 'Ave',
    img: '../assets/bird.webp',
  },
  {
    species: 'Primata',
    img: '../assets/monkey.webp',
  },
  {
    species: 'Roedor',
    img: '../assets/hamster.webp',
  },
];
