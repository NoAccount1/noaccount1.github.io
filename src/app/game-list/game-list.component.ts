import { Component, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { GAMES } from '../games';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {

  gameList = GAMES;

  constructor() { }

  ngOnInit(): void {
  }

}
