import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblinDatingSimulatorComponent } from './goblin-dating-simulator.component';

describe('GoblinDatingSimulatorComponent', () => {
  let component: GoblinDatingSimulatorComponent;
  let fixture: ComponentFixture<GoblinDatingSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoblinDatingSimulatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblinDatingSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
