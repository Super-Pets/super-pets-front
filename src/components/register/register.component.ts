import { Component } from '@angular/core';
import { AnimalsService } from 'src/services/animals.service';
import { NgForm } from '@angular/forms';
import { species, gender, sizes, castration, IAnimals } from 'src/models/animals';

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
    private animalsService: AnimalsService
  ) { }

  onSubmitForm(form: IAnimals) {
    this.animalsService.createAnimal(form).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
