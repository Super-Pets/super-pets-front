import { Component, Input } from '@angular/core';
import { IAnimals } from 'src/models/animals';
import { AnimalsService } from 'src/services/animals.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.scss'],
})
export class AnimalInfoComponent {
  @Input() selectedAnimal: IAnimals | null = null;
  @Input() animalImages: any;

  constructor(
    private animalsService: AnimalsService,
    private toastr: ToastrService
  ) {}

  closeModal() {
    this.selectedAnimal = null;
  }

  displayImage(animal: IAnimals | null, images: any) {
    if (animal && animal.species) {
      const matchImage = images.find(
        (image: any) => image.species === animal.species
      );
      return matchImage?.img;
    }
  }

  deleteAnimal(id: number) {
    this.animalsService.deleteAnimal(id).subscribe({
      next: () => {
        this.selectedAnimal = null;
        location.reload();
      },
      error: () =>
        this.toastr.error(
          'Erro ao deletar pet. Por favor, tente novamente mais tarde.',
          'Erro'
        ),
    });
  }
}
