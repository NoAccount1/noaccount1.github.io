import { Component, OnInit } from '@angular/core';
import { FooterComponent, FooterModule } from './common/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  mobile = false;

  ngOnInit(): void {  }
}
