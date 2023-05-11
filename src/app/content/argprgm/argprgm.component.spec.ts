import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgprgmComponent } from './argprgm.component';

describe('ArgprgmComponent', () => {
  let component: ArgprgmComponent;
  let fixture: ComponentFixture<ArgprgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgprgmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgprgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
