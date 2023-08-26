import { Component } from '@angular/core';
import { inputs } from 'src/models/inputs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  inputs = inputs;

}
