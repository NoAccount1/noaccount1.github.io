import { Component, OnInit } from '@angular/core';
import { GameComponent } from './game/game.component';
import { GAMES } from '../games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GameListComponent implements OnInit {

  gameList = GAMES;

  constructor() { }

  ngOnInit(): void {
  }

}
