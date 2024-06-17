import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecategoriaComponent } from './createcategoria.component';

describe('CreatecategoriaComponent', () => {
  let component: CreatecategoriaComponent;
  let fixture: ComponentFixture<CreatecategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
