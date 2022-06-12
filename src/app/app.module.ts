import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoblinDatingSimulatorComponent } from './goblin-dating-simulator/goblin-dating-simulator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AyesAndBaesComponent } from './ayes-and-baes/ayes-and-baes.component';
import { PoopDiariesComponent } from './poop-diaries/poop-diaries.component';
import { BerglerComponent } from './bergler/bergler.component';
// import { PokemonTwilightComponent } from './pokemon-twilight/pokemon-twilight.component';
import { HomeComponent } from './home/home.component';
import { PokayemonComponent } from './pokayemon/pokayemon.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GoblinDatingSimulatorComponent,
    AyesAndBaesComponent,
    PoopDiariesComponent,
    BerglerComponent,
    // PokemonTwilightComponent,
    HomeComponent,
    PokayemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
