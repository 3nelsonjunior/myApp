
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

      let config = configProvider.getConfigData();

      if (config == null) {
        console.log(config);
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
        console.log('NULL');
      } else {
        this.rootPage = TabsPage;
        console.log('UÉ?');
      }

      console.log(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
