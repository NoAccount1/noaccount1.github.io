import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './common/error/error.component';

import { GamesComponent } from './games/games.component';
import { SoftwaresComponent } from './softwares/softwares.component';

import { ItemComponent } from './common/item/item.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'games/:game', component: ItemComponent },
  { path: 'softwares', component: SoftwaresComponent },
  { path: 'softwares/:software', component: ItemComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingRoutes { }
