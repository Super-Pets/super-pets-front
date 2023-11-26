import { Component, Input, OnDestroy } from '@angular/core';
import { IAnimals, IImages } from 'src/models/animals';
import { AnimalsService } from 'src/services/animals.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.scss'],
})
export class AnimalInfoComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  @Input() selectedAnimal: IAnimals | null = null;
  @Input() animalImages: IImages[] = [];

  constructor(
    private animalsService: AnimalsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  closeModal() {
    this.selectedAnimal = null;
  }

  displayImage(animal: IAnimals | null, images: IImages[]) {
    if (animal && animal.species) {
      const matchImage = images.find(
        (image: IImages) => image.species === animal.species
      );
      return matchImage?.img;
    }
    return;
  }

  deleteAnimal(id: number) {
    this.subscription = this.animalsService.deleteAnimal(id).subscribe({
      next: () => {
        !this.selectedAnimal;
        window.location.reload();
      },
      error: () =>
        this.toastr.error(
          'Erro ao deletar pet. Por favor, tente novamente mais tarde.',
          'Erro'
        ),
    });
  }

  goToEditAnimal(id: number) {
    this.router.navigate(['/editar', id]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
