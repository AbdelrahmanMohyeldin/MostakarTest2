import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsDubaiComponent } from './project-details-dubai.component';

describe('ProjectDetailsDubaiComponent', () => {
  let component: ProjectDetailsDubaiComponent;
  let fixture: ComponentFixture<ProjectDetailsDubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsDubaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsDubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
