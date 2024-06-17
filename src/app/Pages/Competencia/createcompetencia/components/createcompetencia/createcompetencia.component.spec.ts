import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompetenciaComponent } from './createcompetencia.component';

describe('CreatecompetenciaComponent', () => {
  let component: CreatecompetenciaComponent;
  let fixture: ComponentFixture<CreatecompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecompetenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
