import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAsesorComponent } from './tabla-asesor.component';

describe('TablaAsesorComponent', () => {
  let component: TablaAsesorComponent;
  let fixture: ComponentFixture<TablaAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
