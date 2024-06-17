import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateatletaComponent } from './createatleta.component';

describe('CreateatletaComponent', () => {
  let component: CreateatletaComponent;
  let fixture: ComponentFixture<CreateatletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateatletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateatletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
