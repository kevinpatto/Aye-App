import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoopDiariesComponent } from './poop-diaries.component';

describe('PoopDiariesComponent', () => {
  let component: PoopDiariesComponent;
  let fixture: ComponentFixture<PoopDiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoopDiariesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoopDiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
