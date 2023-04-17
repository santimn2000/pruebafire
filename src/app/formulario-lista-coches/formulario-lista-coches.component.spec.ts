import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioListaCochesComponent } from './formulario-lista-coches.component';

describe('FormularioListaCochesComponent', () => {
  let component: FormularioListaCochesComponent;
  let fixture: ComponentFixture<FormularioListaCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioListaCochesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioListaCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
