import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'games', component: GameListComponent },
    { path: 'games/:game', component: GameComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
