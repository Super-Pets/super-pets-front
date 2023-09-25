import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAnimals } from 'src/models/animals';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent {
  @Input() animals: IAnimals[] = [];
  @Output() clickButton: EventEmitter<MouseEvent> = new EventEmitter();

}
