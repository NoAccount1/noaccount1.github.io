import { Component, OnInit } from '@angular/core';
import { GameComponent } from './game/game.component';
import { GAMES } from '../games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  sort: { name: string, id: number } = { name: 'nom', id: 1 };
  gameList = GAMES;
  showMenu = () => {
    console.log('Montres moi le menu');
  }
  switchOrder = () => {
    console.log('Change l\'ordre');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
