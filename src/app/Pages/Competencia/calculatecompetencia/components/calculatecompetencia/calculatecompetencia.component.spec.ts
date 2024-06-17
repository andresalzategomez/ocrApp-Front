import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatecompetenciaComponent } from './calculatecompetencia.component';

describe('CalculatecompetenciaComponent', () => {
  let component: CalculatecompetenciaComponent;
  let fixture: ComponentFixture<CalculatecompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatecompetenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatecompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
