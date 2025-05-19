import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCompetenciaAprobarLigaComponent } from './listcompetenciaaprobarliga.component';

describe('ListCompetenciaAprobarComponent', () => {
  let component: ListCompetenciaAprobarLigaComponent;
  let fixture: ComponentFixture<ListCompetenciaAprobarLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompetenciaAprobarLigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompetenciaAprobarLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
