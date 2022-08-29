import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoblinDatingSimulatorComponent} from "./goblin-dating-simulator/goblin-dating-simulator.component";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AyesAndBaesComponent} from "./ayes-and-baes/ayes-and-baes.component";
import {PoopDiariesComponent} from "./poop-diaries/poop-diaries.component";
import {BerglerComponent} from "./bergler/bergler.component";
import {HomeComponent} from "./home/home.component";
import {PokayemonComponent} from "./pokayemon/pokayemon.component";
import {PoopFormComponent} from "./poop-form/poop-form.component";
import {MaintenanceComponent} from "./maintenance/maintenance.component";

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
  { path: 'Pokayemon',
    component: PokayemonComponent
  },
  { path: 'Poop-Form',
    component: PoopFormComponent
  },
  { path: 'maintenance',
    component: MaintenanceComponent
  },
  { path: '**',
    component: HomeComponent
  },
  { path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
