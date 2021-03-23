import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../common/item/item.component';
import { Router } from '@angular/router';
import { GAMES } from '../games';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  gameList = GAMES;
  pageTitle = 'Liste des jeux';
  arrowWay = 'upward';
  way = 'up';
  lowValue: number = 0;
  highValue: number = 20;

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  goto = (url: string) => {
    this.router.navigate(['/games', url]);
  }
  sort = () => {
    if (this.way === 'up') {
      this.way = 'down';
      this.arrowWay = 'downward';
      this.gameList.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }
        return 0;
      });
    } else if (this.way === 'down') {
      this.way = 'up';
      this.arrowWay = 'upward';
      this.gameList.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) { return -1; }
        if (nameA < nameB) { return 1; }
        return 0;
      });
    }
  }

  ngOnInit(): void {
    this.sort();
  }
}
