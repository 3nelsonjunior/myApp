
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MovieProvider } from './../../providers/movie/movie';

import { FilmeDetalhesPage } from './../filme-detalhes/filme-detalhes';

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
  public infiniteScroll;
  public isRefleshing: boolean = false;
  public listaFilmes = new Array<any>();
  public page = 1;

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
      content: "Carregando filmes...",
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

  // carregar mais fiulmes(tipo paginação)
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newPage: boolean = false) {
    this.abreCarregamento();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        // verifica se esta carregando novos filmes(newPage)
        if(newPage){
          this.listaFilmes = this.listaFilmes.concat( data['results']);
          this.infiniteScroll.complete();
        } else {
          this.listaFilmes = data['results'];
        }

        
        console.log(this.listaFilmes);
        this.fechaCarregamento();
        // se isRefleshing estiver rodando faça...
        if (this.isRefleshing) {
          // fecha efeito reflesher
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

  abrirDetalhes(filme) {
    //console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }
}
