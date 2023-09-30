import '../models/animals';
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
    img: '../assets/cat.jpeg',
  },
  {
    species: 'Coelho',
    img: '../assets/rabbit.webp',
  },
  {
    species: 'Cobra',
    img: '../assets/snake.jpeg',
  },
  {
    species: 'Ave',
    img: '../assets/bird.jpeg',
  },
  {
    species: 'Primata',
    img: '../assets/monkey.jpeg',
  },
  {
    species: 'Roedor',
    img: '../assets/hamster.webp',
  },
];
