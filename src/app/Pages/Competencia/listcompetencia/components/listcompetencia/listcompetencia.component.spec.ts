import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCompetenciaComponent } from './listcompetencia.component';

describe('ListcompetenciaComponent', () => {
  let component: ListCompetenciaComponent;
  let fixture: ComponentFixture<ListCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompetenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
