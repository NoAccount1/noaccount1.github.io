import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './games/game/game.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'games/:game', component: GameComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingRoutes { }
