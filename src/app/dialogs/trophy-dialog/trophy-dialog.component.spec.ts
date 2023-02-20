import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyDialogComponent } from './trophy-dialog.component';

describe('TrophyDialogComponent', () => {
  let component: TrophyDialogComponent;
  let fixture: ComponentFixture<TrophyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrophyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrophyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
