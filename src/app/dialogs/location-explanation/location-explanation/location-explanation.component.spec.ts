import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationExplanationComponent } from './location-explanation.component';

describe('LocationExplanationComponent', () => {
  let component: LocationExplanationComponent;
  let fixture: ComponentFixture<LocationExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
