import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLiteModule } from './material/material-lite.module';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialLiteModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
