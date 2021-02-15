import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'github-root';
  mobile = false;
  isScreenSmall$: any;

  showSideBar = () => {
    document.getElementById('sidebar');
  }

  ngOnInit(): void {

  }
}
