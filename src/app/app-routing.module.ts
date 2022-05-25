import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoblinDatingSimulatorComponent} from "./goblin-dating-simulator/goblin-dating-simulator.component";

const routes: Routes = [
  { path: 'Goblin-Dating-Simulator', component: GoblinDatingSimulatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
