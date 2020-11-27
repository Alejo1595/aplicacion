import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAsesorComponent } from './components/registro-asesor/registro-asesor.component';

const routes: Routes = [
  { path: 'registro', component: RegistroAsesorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRegistroAsesorRoutingModule { }
