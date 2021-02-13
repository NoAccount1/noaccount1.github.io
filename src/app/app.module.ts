import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingRoutes } from './app-routing.routes';
import { AppComponent } from './app.component';
import { GameComponent } from './games/game/game.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './games/games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    GameListComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutes,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
