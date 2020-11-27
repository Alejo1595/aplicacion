import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAsesorComponent } from './formulario-asesor.component';

describe('FormularioAsesorComponent', () => {
  let component: FormularioAsesorComponent;
  let fixture: ComponentFixture<FormularioAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
