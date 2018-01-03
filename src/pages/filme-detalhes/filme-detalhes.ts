
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider } from './../../providers/movie/movie';



/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    MovieProvider,
  ]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeId;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
  ) {
    // construtor
  }

  ionViewDidEnter() {
    this.filmeId = this.navParams.get('id');
    console.log(this.filmeId); 
    
    this.movieProvider.getMovieDetails(this.filmeId).subscribe(
      data => {
        this.filme = data;    
      }, error => {
        console.log(error);
      }
    );
  }

}
