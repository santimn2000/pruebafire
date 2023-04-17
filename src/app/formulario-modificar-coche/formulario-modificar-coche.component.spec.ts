import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModificarCocheComponent } from './formulario-modificar-coche.component';

describe('FormularioModificarCocheComponent', () => {
  let component: FormularioModificarCocheComponent;
  let fixture: ComponentFixture<FormularioModificarCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioModificarCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioModificarCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
