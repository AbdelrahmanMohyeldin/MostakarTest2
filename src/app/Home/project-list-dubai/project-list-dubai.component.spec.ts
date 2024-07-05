import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListDubaiComponent } from './project-list-dubai.component';

describe('ProjectListDubaiComponent', () => {
  let component: ProjectListDubaiComponent;
  let fixture: ComponentFixture<ProjectListDubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListDubaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListDubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
