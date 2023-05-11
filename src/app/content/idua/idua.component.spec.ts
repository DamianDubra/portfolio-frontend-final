import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IduaComponent } from './idua.component';

describe('IduaComponent', () => {
  let component: IduaComponent;
  let fixture: ComponentFixture<IduaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IduaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
