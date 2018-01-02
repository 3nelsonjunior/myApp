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

  public objetoFeed = {
    titulo: "Nelson Júnior",
    data: "Janeiro 02, 2018",
    descricao: "Criando APP BBP!!!",
    qntLikes: 21,
    qntComments: 3,
    dataComments: "11h, ago",
  }

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
  

  ionViewDidLoad() {
    console.log(this.somaNumeros());
  }
  */
}
