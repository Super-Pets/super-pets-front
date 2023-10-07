import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAnimals, IImages } from 'src/models/animals';
import { animalImages } from 'src/utils/constants';
import { Router } from '@angular/router';
import { AnimalsService } from 'src/services/animals.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
})
export class AnimalCardComponent {
  @Input() animals: IAnimals[] = [];
  @Output() clickButton: EventEmitter<any> = new EventEmitter<any>();
  animalImages = animalImages;

  constructor(
    private router: Router,
    private animalsService: AnimalsService,
    private toastr: ToastrService
  ) {}

  displayImage(animalInfo: IAnimals, animalsImage: IImages[]) {
    const matchImage = animalsImage.find(
      (image) => image.species === animalInfo.species
    );
    return matchImage?.img;
  }

  getAnimalInfo(id: number) {
    this.getAnimalById(id);
  }

  getAnimalById(id: number): void {
    this.animalsService.getAnimalById(id).subscribe({
      next: (result) => console.log(result),
      error: () =>
        this.toastr.error(
          'Erro ao carregar informações do pet. Por favor, tente novamente.',
          'Erro'
        ),
    });
  }
}
