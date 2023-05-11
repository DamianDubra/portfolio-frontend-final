import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostazaComponent } from './mostaza.component';

describe('MostazaComponent', () => {
  let component: MostazaComponent;
  let fixture: ComponentFixture<MostazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
