import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from 'src/services/animals.service';
import {
  species,
  gender,
  sizes,
  castration
} from 'src/utils/constants';
import { ToastrService } from 'ngx-toastr';
import { IAnimals } from 'src/models/animals';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  animalInfo: any;
  animalsType = {
    species: species,
    gender: gender,
    sizes: sizes,
    castration: castration,
  };

  constructor(
    private route: ActivatedRoute,
    private animalsService: AnimalsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.animalsService.getAnimalById(id).subscribe({
      next: (result) => {
        this.animalInfo = result;
      },
      error: () =>
        this.toastr.error(
          'Erro ao trazer infos do pet. Por favor, tente novamente mais tarde.',
          'Erro'
        ),
    });
  }

  submitEdit(id: any, data: IAnimals) {
    this.animalsService.editAnimal(id, data).subscribe({
      next: () => {
        this.toastr.success('Pet editado com sucesso.', 'Sucesso!');
        this.router.navigateByUrl('/');
      },
      error: () =>
        this.toastr.error(
          'Erro ao editar pet. Por favor, tente novamente mais tarde.',
          'Erro'
        ),
    });
  }
}
