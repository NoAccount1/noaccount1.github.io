import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the angular files */
import { AppRoutingRoutes } from './app-routing.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Import the components files */
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

/* Import the miscellaneous files */
import { MaterialModule } from './common/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
