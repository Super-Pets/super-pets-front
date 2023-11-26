import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from 'src/components/edit/edit.component';
import { HomeComponent } from 'src/components/home/home.component';
import { RegisterComponent } from 'src/components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'editar/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
