import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoblinDatingSimulatorComponent } from './goblin-dating-simulator/goblin-dating-simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    GoblinDatingSimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
