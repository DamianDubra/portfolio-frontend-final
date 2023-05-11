import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPotatoeComponent } from './project-potatoe.component';

describe('ProjectPotatoeComponent', () => {
  let component: ProjectPotatoeComponent;
  let fixture: ComponentFixture<ProjectPotatoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPotatoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPotatoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
