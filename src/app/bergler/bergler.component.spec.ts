import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerglerComponent } from './bergler.component';

describe('BerglerComponent', () => {
  let component: BerglerComponent;
  let fixture: ComponentFixture<BerglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
