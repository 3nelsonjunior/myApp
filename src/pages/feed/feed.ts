
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
    qntComments: 3,
    dataComments: '11h, ago',
  }

  public loader;
  public refresher;
  public isRefleshing: boolean = false;
  public listaFilmes = new  Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieProvider: MovieProvider,
              public loadingCtrl: LoadingController
            ) {
  }

  // ionViewDidEnter => sempre que entrar na pagina
  ionViewDidEnter() {
    this.carregarFilmes();
  }

  // efeito de loadindg
  abreCarregamento() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
      // duration: 3000
    });
    this.loader.present();
  }

  // interrompe efeito loading
  fechaCarregamento() {
    this.loader.dismiss();
  }

  // efeito refresh
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefleshing = true;
    this.carregarFilmes();
  }

  carregarFilmes() {
    this.abreCarregamento();
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        this.listaFilmes = data['results'];
        console.log(this.listaFilmes);
        this.fechaCarregamento();
        if(this.isRefleshing){
          this.refresher.complete();
          this.isRefleshing = true;
        }
      },
      error => {
        console.log(error);
        this.fechaCarregamento();
      }
    );
  }
}
