import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [
    Camera,
  ]
})
export class PerfilPage {

  img = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
  ) {
  }

  tirarFoto() {
    const options: CameraOptions = {
      // qualidade
      quality: 100,
      // destino da foto
      // DATA_URL -> foto em formato de texto (enorme)
      // FILE_URI -> caminho onte esta armazenada a foto no dispositivo
      // NATIVE_URI -> ~caminho onte esta armazenada a foto no dispositivo
      destinationType: this.camera.DestinationType.DATA_URL,
      // extensão da imagem
      encodingType: this.camera.EncodingType.JPEG,
      // tipo.: video, imagem ou outro tipo de mida(ex.: gif)
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


}
