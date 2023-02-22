import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoopFormComponent } from './poop-form.component';

describe('PoopFormComponent', () => {
  let component: PoopFormComponent;
  let fixture: ComponentFixture<PoopFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoopFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
