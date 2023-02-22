import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyesAndBaesComponent } from './ayes-and-baes.component';

describe('AyesAndBaesComponent', () => {
  let component: AyesAndBaesComponent;
  let fixture: ComponentFixture<AyesAndBaesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyesAndBaesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyesAndBaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
