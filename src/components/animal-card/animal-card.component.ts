import { Component, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { IAnimals, IImages } from 'src/models/animals';
import { animalImages } from 'src/utils/constants';
import { AnimalsService } from 'src/services/animals.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
})
export class AnimalCardComponent implements OnDestroy {
  @Input() animals: IAnimals[] = [];
  @Output() clickButton: EventEmitter<any> = new EventEmitter<any>();
  subscription: Subscription = new Subscription();
  animalImages = animalImages;
  isModalVisible: boolean = false;
  selectedAnimal: IAnimals = {
    id: 0,
    name: '',
    description: '',
    species: 'Cachorro',
    gender: 'Feminino',
    age: 0,
    size: 'Pequeno',
    local: '',
    vaccines: '',
    castration: false,
  };

  constructor(
    private animalsService: AnimalsService,
    private toastr: ToastrService
  ) {}

  displayImage(animalInfo: IAnimals, animalsImage: IImages[]) {
    const matchImage = animalsImage.find(
      image => image.species === animalInfo.species
    );
    return matchImage?.img;
  }

  getAnimalInfo(id: number) {
    this.subscription = this.animalsService.getAnimalById(id).subscribe({
      next: (data) => {
        this.isModalVisible = true;
        this.selectedAnimal = data;
      },
      error: () =>
        this.toastr.error(
          'Erro ao carregar informações do pet. Por favor, tente novamente.',
          'Erro'
        ),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
