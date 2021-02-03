import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GAMES } from '../games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  gameList = GAMES;
  gameUrl = this.activatedRoute.snapshot.params.game;
  mainGame: any;

  // tslint:disable-next-line: typedef
  ngOnInit() {
    const gameList = GAMES;
    const gameUrl: string = this.activatedRoute.snapshot.params.game;
    const path: string = this.activatedRoute.snapshot.url.toString();
    const games: any[] = [];
    console.log('mainGame : ' + this.mainGame);
    console.log('gameList : ' + this.gameList);
    if (path !== 'games') {
      for (const game of gameList) {
        if (game.routeUrl === gameUrl) {
          this.mainGame = game;
        }
      }
    }
    if (!(gameUrl in games)) {
      this.route.navigate(['/error']);
    }
  }
}
