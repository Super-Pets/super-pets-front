import { Component, OnDestroy } from '@angular/core';
import { AnimalsService } from 'src/services/animals.service';
import { ToastrService } from 'ngx-toastr';
import {
  species,
  gender,
  sizes,
  castration
} from 'src/utils/constants';
import { IAnimals } from 'src/models/animals';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  animalsType = {
    species: species,
    gender: gender,
    sizes: sizes,
    castration: castration,
  };

  constructor(
    private animalsService: AnimalsService,
    private toastr: ToastrService
  ) {}

  onSubmitForm(data: IAnimals, form: NgForm): void {
    this.subscription = this.animalsService.createAnimal(data).subscribe({
      next: () => {
        form.reset();
        this.toastr.success('Pet cadastrado com sucesso.', 'Sucesso!');
      },
      error: () =>
        this.toastr.error(
          'Erro ao criar pet. Por favor, tente novamente mais tarde.',
          'Erro'
        ),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
