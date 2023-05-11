import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmfComponent } from './hmf.component';

describe('HmfComponent', () => {
  let component: HmfComponent;
  let fixture: ComponentFixture<HmfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
