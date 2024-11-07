import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GanadoresDialogComponent } from './ganadores-dialog.component';


describe('BloqueDialogComponent', () => {
  let component: GanadoresDialogComponent;
  let fixture: ComponentFixture<GanadoresDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanadoresDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanadoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
