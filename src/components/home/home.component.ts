import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnimals } from 'src/models/animals';
import { AnimalsService } from 'src/services/animals.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animals: IAnimals[] = [];

  constructor(
    private router: Router,
    private animalsService: AnimalsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  registratePet() {
    this.router.navigateByUrl('/registrar');
  }

  getAnimals() {
    this.animalsService.getAnimals().subscribe({
      next: result => this.animals = result,
      error: () => {
        this.toastr.error('Erro ao carregar informações dos pets. Por favor, tente novamente.', 'Erro');
      }
    })
  }

  getAnimalById() {
    this.animalsService.getAnimalById('1').subscribe({
      next: result => console.log(result)
    })
  }

}
