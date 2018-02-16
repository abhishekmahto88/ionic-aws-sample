import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CollectionList } from '../../models/munipalities/muncipality';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  collections:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.collections=CollectionList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage :',this.collections);
    this.collections=CollectionList;

  }

  gotoItemDetailsPage(item: string,logo:string):void{
    this.navCtrl.push('ItemDetailsPage',{itemName:item,itemLogo:logo});
  }

}
