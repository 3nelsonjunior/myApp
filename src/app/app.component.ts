
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from './../pages/intro/intro';
import { TabsPage } from './../pages/tabs/tabs';
import { ConfigProvider } from './../providers/config/config';


@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider,
  ]
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configProvider: ConfigProvider,
  ) {
    platform.ready().then(() => {

      // busca valor no localstorage para comparar se é a primeira vez do acesso
      let config = configProvider.getConfigData();

      // no primeiro acesso será 'null' localstorage então direciona para intro
      if (config == null) {
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
      // após primeiro acesso jaá direciona para pagina principal
      } else {
        this.rootPage = TabsPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
