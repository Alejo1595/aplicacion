import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRegistroAsesorRoutingModule } from './feature-registro-asesor-routing.module';
import { RegistroAsesorComponent } from './components/registro-asesor/registro-asesor.component';
import { FormularioAsesorComponent } from './ui/formulario-asesor/formulario-asesor.component';
import { TablaAsesorComponent } from './ui/tabla-asesor/tabla-asesor.component';

import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    RegistroAsesorComponent,
    FormularioAsesorComponent,
    TablaAsesorComponent
  ],
  imports: [
    CommonModule,
    FeatureRegistroAsesorRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule,
  ]
})
export class FeatureRegistroAsesorModule { }
