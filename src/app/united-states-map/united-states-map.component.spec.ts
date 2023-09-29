import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedStatesMapComponent } from './united-states-map.component';

describe('UnitedStatesMapComponent', () => {
  let component: UnitedStatesMapComponent;
  let fixture: ComponentFixture<UnitedStatesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitedStatesMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitedStatesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
