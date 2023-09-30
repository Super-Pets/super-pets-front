import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'src/routes/app-routing.module';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ButtonComponent, HeaderComponent],
})
export class SharedModule {}
