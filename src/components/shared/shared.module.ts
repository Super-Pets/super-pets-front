import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    InputFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    InputFormComponent
  ]
})
export class SharedModule { }
