import { Component, Input } from '@angular/core';
import { IAnimals } from 'src/models/animals';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.scss'],
})
export class AnimalInfoComponent {
  @Input() selectedAnimal: IAnimals | null = null;
  @Input() animalImages: any;

  closeModal() {
    this.selectedAnimal = null;
  }

  displayImage(animal: IAnimals | null, images: any) {
    if (animal && animal.species) {
      const matchImage = images.find((image: any) => image.species === animal.species);
      return matchImage?.img;
    }
  }
}