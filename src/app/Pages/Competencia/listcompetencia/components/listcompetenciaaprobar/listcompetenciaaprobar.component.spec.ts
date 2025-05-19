import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCompetenciaAprobarComponent } from './listcompetenciaaprobar.component';

describe('ListCompetenciaAprobarComponent', () => {
  let component: ListCompetenciaAprobarComponent;
  let fixture: ComponentFixture<ListCompetenciaAprobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompetenciaAprobarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompetenciaAprobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
