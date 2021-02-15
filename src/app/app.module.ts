import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingRoutes } from './app-routing.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    GamesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutes,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
