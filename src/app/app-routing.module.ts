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
import {LeaderboardsComponent} from "./leaderboards/leaderboards.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [

  // { path: 'goblin-dating-simulator',
  //   component: GoblinDatingSimulatorComponent
  // },
  // { path: 'ayes-and-baes',
  //   component: AyesAndBaesComponent
  // },
  { path: 'poop-diaries',
    component: PoopDiariesComponent,
    title: 'Aye - Poop Diaries'
  },
  // { path: 'bergler',
  //   component: BerglerComponent
  // },
  // { path: 'pokayemon',
  //   component: PokayemonComponent
  // },
  { path: 'poop-form',
    component: PoopFormComponent,
    title: 'Aye - Poop Form',
  },
  { path: 'maintenance',
    component: MaintenanceComponent,
    title: 'Aye - Maintenance',
  },
  { path: 'leaderboards',
    component: LeaderboardsComponent,
    title: 'Aye - Leaderboards'
  },
  { path: 'profile',
    component: ProfileComponent,
    title: 'Aye - Profile'
  },
  { path: 'authorize',
    component: ProfileComponent,
    title: 'Aye - Profile'
  },
  { path: '**',
    component: HomeComponent,
    title: 'Aye - Welcome',
  },
  { path: '',
    component: HomeComponent,
    title: 'Aye - Welcome',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
