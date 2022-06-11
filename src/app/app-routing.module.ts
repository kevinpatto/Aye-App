import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoblinDatingSimulatorComponent} from "./goblin-dating-simulator/goblin-dating-simulator.component";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AyesAndBaesComponent} from "./ayes-and-baes/ayes-and-baes.component";
import {PoopDiariesComponent} from "./poop-diaries/poop-diaries.component";
import {BerglerComponent} from "./bergler/bergler.component";
import {PokemonTwilightComponent} from "./pokemon-twilight/pokemon-twilight.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  { path: 'Goblin-Dating-Simulator',
    component: GoblinDatingSimulatorComponent
  },
  { path: 'Ayes-And-Baes',
    component: AyesAndBaesComponent
  },
  { path: 'Poop-Diaries',
    component: PoopDiariesComponent
  },
  { path: 'Bergler',
    component: BerglerComponent
  },
  { path: 'Pokemon-Twilight',
    component: PokemonTwilightComponent
  },
  { path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
