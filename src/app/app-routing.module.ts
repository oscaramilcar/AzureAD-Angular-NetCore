import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguridadComponent } from './seguridad/seguridad.component';


const routes: Routes = [
  { path: 'seguridad', component: SeguridadComponent },
  { path: '', redirectTo: 'seguridad', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
