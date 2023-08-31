import { Component } from '@angular/core';
import { AnimalsService } from 'src/services/animals.service';
import { ToastrService } from 'ngx-toastr';
import { species, gender, sizes, castration, IAnimals } from 'src/models/animals';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  species = species;
  gender = gender;
  sizes = sizes;
  castration = castration;

  constructor(
    private animalsService: AnimalsService,
    private toastr: ToastrService
  ) { }

  onSubmitForm(data: IAnimals, form: NgForm) {
    this.animalsService.createAnimal(data).subscribe({
      next: response => {
        form.reset();
        this.toastr.success('Pet cadastrado com sucesso.', 'Sucesso!');
      },
      error: error => {
        this.toastr.error('Erro na requisição. Por favor, tente novamente mais tarde.', 'Erro');
      }
    })
  }

}
