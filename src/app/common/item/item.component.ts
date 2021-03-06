import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GAMES } from '../../games';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() mainGame: any;
  @Input() fullView: boolean | undefined;

  constructor(
    public activatedRoute: ActivatedRoute,
    public _location: Location // tslint:disable-line: variable-name
  ) {}

  gameUrl = this.activatedRoute.snapshot.params.game;
  backPage = () => {
    this._location.back();
  }

  ngOnInit(): void {
    if (this.fullView !== false) {
      this.fullView = true;
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
