import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'asesor',
    loadChildren: () =>
      import('./feature/feature-registro-asesor/feature-registro-asesor.module')
        .then(m => m.FeatureRegistroAsesorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
