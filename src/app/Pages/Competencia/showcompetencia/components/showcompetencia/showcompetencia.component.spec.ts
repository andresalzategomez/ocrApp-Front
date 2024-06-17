import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowCompetenciaComponent } from './showcompetencia.component';

describe('CalculatecompetenciaComponent', () => {
  let component: ShowCompetenciaComponent;
  let fixture: ComponentFixture<ShowCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCompetenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
