/* Import the angular files */
import { AppRoutingRoutes } from './app-routing.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the miscellaneous files */
import { MaterialModule } from './common/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SoftwaresComponent } from './softwares/softwares.component';

/* Import the components files */
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { ItemComponent } from './common/item/item.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './common/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    ItemComponent,
    ErrorComponent,
    SoftwaresComponent,
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
