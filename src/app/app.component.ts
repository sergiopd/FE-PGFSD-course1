import { Component, } from '@angular/core';
import { TABS, Tab } from './models/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tabs: Tab[] = Object.values(TABS);

}
