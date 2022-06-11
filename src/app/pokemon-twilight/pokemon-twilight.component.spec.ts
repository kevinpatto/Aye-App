import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTwilightComponent } from './pokemon-twilight.component';

describe('PokemonTwilightComponent', () => {
  let component: PokemonTwilightComponent;
  let fixture: ComponentFixture<PokemonTwilightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTwilightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTwilightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
