
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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

  public loader;
  public listaFilmes = new  Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieProvider: MovieProvider,
              public loadingCtrl: LoadingController
            ) {
  }

  // ionViewDidEnter => sempre que entrar na pagina
  ionViewDidEnter() {
    this.abreCarregamento();
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        this.listaFilmes = data['results'];
        console.log(this.listaFilmes);
        this.fechaCarregamento();
      },
      error => {
        console.log(error);
        this.fechaCarregamento();
      }
    );
  }

  abreCarregamento() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
      // duration: 3000
    });
    this.loader.present();
  }

  fechaCarregamento() {
    this.loader.dismiss();
  }
}
