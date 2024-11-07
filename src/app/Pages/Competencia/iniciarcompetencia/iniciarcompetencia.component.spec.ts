import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarcompetenciaComponent } from './iniciarcompetencia.component';

describe('IniciarcompetenciaComponent', () => {
  let component: IniciarcompetenciaComponent;
  let fixture: ComponentFixture<IniciarcompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarcompetenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarcompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
