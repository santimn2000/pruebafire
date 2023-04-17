import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioPerfilComponent } from './fomulario-perfil.component';

describe('FomularioPerfilComponent', () => {
  let component: FomularioPerfilComponent;
  let fixture: ComponentFixture<FomularioPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomularioPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomularioPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
