import { Component, OnInit } from '@angular/core';
import { INITIAL_TABS, TABS, Tab } from './models/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public tabs: Tab[] = Object.values(TABS);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // TODO (perezse): Borrar este console.log
    console.log(this.tabs);
  }
}
