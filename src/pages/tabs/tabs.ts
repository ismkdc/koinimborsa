import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HomePage2 } from '../home2/home2';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HomePage2;
  constructor() {

  }
}
