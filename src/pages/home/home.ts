import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
buy:string;
sell:string;
  constructor(public navCtrl: NavController, public http: Http) {
 this.getData();
  }
   doRefresh(refresher) {
   this.getData();
    setTimeout(() => {
     refresher.cancel();
    }, 2000);
   }
   getData()
   {
this.http.get('https://koinim.com/ticker/').subscribe(data => {
              var jsonData = data.json();
              console.log(jsonData);
              this.buy = jsonData.buy;
              this.sell = jsonData.sell;
            });
   }

}
