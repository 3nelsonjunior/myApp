
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider } from './../../providers/movie/movie';

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
  providers: [
    MovieProvider,
  ]
})
export class FeedPage {

  public objetoFeed = {
    titulo: 'Nelson Júnior',
    data: 'Janeiro 02, 2018',
    descricao: 'Criando APP BBP!!!',
    qntLikes: 21,
    qntComments: 3,
    dataComments: '11h, ago',
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieProvider: MovieProvider,
            ) {
  }

  ionViewDidLoad() {
    console.log(this.movieProvider.getLatestMovies().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    ));
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
