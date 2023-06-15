import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatExplanationComponent } from './stat-explanation.component';

describe('StatExplanationComponent', () => {
  let component: StatExplanationComponent;
  let fixture: ComponentFixture<StatExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
