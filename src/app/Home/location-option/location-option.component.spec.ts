import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOptionComponent } from './location-option.component';

describe('LocationOptionComponent', () => {
  let component: LocationOptionComponent;
  let fixture: ComponentFixture<LocationOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
