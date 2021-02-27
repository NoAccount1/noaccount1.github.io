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

  constructor(private router: Router) {
  }
  gameList = GAMES;
  pageTitle = 'Liste des jeux';
  arrowWay = 'upward';
  way = 'up';

  goto = (url: string) => {
    this.router.navigate(['/games', url]);
  }
  sort = () => {
    if (this.way === 'up') {
      this.way = 'down';
      this.arrowWay = 'downward';
      this.gameList.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    } else if (this.way === 'down') {
      this.way = 'up';
      this.arrowWay = 'upward';
      this.gameList.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }
  }

  ngOnInit(): void { this.sort(); }
}
