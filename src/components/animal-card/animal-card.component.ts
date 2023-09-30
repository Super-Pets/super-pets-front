import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAnimals, IImages } from 'src/models/animals';
import { animalImages } from 'src/utils/constants';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
})
export class AnimalCardComponent {
  @Input() animals: IAnimals[] = [];
  @Output() clickButton: EventEmitter<MouseEvent> = new EventEmitter();
  animalImages = animalImages;

  displayImage(animalInfo: IAnimals, animalsImage: IImages[]) {
    const matchImage = animalsImage.find(
      (image) => image.species === animalInfo.species
    )
    return matchImage?.img;
  }
}
