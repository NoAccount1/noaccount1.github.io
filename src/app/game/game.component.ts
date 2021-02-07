import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GAMES, Game } from '../games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input('mainGame') mainGame: any; // tslint:disable-line: no-input-rename
  @Input() view: any;

  constructor(
    public activatedRoute: ActivatedRoute
  ) {}

  gameUrl = this.activatedRoute.snapshot.params.game;

  // tslint:disable-next-line: typedef
  ngOnInit() {
    if (this.view !== 'item') {
      this.view = 'full';
    }
    const gameList = GAMES;
    const gameUrl: string = this.activatedRoute.snapshot.params.game;
    const path: string = this.activatedRoute.snapshot.url.toString();
    if (path !== 'games') {
      for (const game of gameList) {
        if (game.routeUrl === gameUrl) {
          this.mainGame = game;
        }
      }
    }
  }
}
