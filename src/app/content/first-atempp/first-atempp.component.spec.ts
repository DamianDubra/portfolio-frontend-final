import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAtemppComponent } from './first-atempp.component';

describe('FirstAtemppComponent', () => {
  let component: FirstAtemppComponent;
  let fixture: ComponentFixture<FirstAtemppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAtemppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAtemppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
