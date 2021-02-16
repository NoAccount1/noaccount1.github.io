import { Component, OnInit } from '@angular/core';
import { GameComponent } from './game/game.component';
import { Router } from '@angular/router';
import { GAMES } from '../games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {
  sort: { name: string, id: number } = { name: 'nom', id: 1 };
  gameList = GAMES;
  pageTitle = 'Liste des jeux';
  goto = (url: string) => {
    this.router.navigate(['/games', url]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
