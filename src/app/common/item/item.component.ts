import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GAMES } from '../../games';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Output() notify: EventEmitter<boolean | undefined> = new EventEmitter<boolean | undefined>();

  @Input() mainGame: any;
  @Input() fullView: boolean | undefined;

  gameUrl = this.activatedRoute.snapshot.params.game;

  constructor(
    public activatedRoute: ActivatedRoute,
    public _location: Location // tslint:disable-line: variable-name
  ) {}

  backPage = () => {
    this._location.back();
  }
  sendTitle(): void {
    this.notify.emit(this.fullView);
  }


  ngOnInit(): void {
    if (this.fullView !== false) { this.fullView = true; }
    console.log(`item.component  : ${this.fullView}`);
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
