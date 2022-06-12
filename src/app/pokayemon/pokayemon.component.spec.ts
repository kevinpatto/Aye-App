import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokayemonComponent } from './pokayemon.component';

describe('PokayemonComponent', () => {
  let component: PokayemonComponent;
  let fixture: ComponentFixture<PokayemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokayemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokayemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
