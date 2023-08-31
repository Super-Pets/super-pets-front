import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
