import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Import all components for the page title */
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild(GamesComponent) games: GamesComponent | any;

  title = 'github-root';
  mobile = false;
  pageTitle: any;

  ngAfterViewChecked(): void {
    this.pageTitle = this.games.pageTitle;
  }
  ngOnInit(): void {  }
}
