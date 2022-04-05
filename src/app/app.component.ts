import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FooterComponent, FooterModule } from './common/footer.component';
import { ItemComponent } from './common/item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChildren(ItemComponent) appitem: QueryList<ItemComponent> | undefined;
  @Input() fullView: boolean | undefined;

  mobile = false;

  getChildTitle(fullView: string): void{
    console.log('Received child\'s title: ' + fullView);
  }
  ngOnInit(): void {
    console.log(`app.component  : ${this.fullView}`);
  }
}
