import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  private nomeUsuario: String = 'Nelson Florêncio Júnior';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaNumeros(): void {
    alert(3+3);
  }

  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }
  */

  ionViewDidLoad() {
    console.log(this.somaNumeros());
  }
}
