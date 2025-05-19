import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCompetenciaFinalizadasComponent } from './listcompetenciafinalizadas.component';

describe('ListcompetenciaComponent', () => {
  let component: ListCompetenciaFinalizadasComponent;
  let fixture: ComponentFixture<ListCompetenciaFinalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompetenciaFinalizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompetenciaFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
