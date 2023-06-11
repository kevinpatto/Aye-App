import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftballComponent } from './softball.component';

describe('SoftballComponent', () => {
  let component: SoftballComponent;
  let fixture: ComponentFixture<SoftballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
