import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EestComponent } from './eest.component';

describe('EestComponent', () => {
  let component: EestComponent;
  let fixture: ComponentFixture<EestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
