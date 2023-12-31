import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../routes/app-routing.module';
import { AppComponent } from '../app/app.component';
import { SharedModule } from 'src/components/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from 'src/components/register/register.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { AnimalCardComponent } from 'src/components/animal-card/animal-card.component';
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AnimalCardComponent,
    AnimalInfoComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  exports: [AnimalInfoComponent],
  bootstrap: [AppComponent],
})
export class ComponentsModule {}
