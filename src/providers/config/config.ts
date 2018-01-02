
import { Injectable } from '@angular/core';

// nome do token no localstorage
let configKeyName = 'config';

@Injectable()
export class ConfigProvider {
  
  private config = {
    showSlide: false,
    name: '',
    userName: '',
  }

  constructor() {
  }

  // recuperar dados do localStorage
  getConfigData(): any {
    return localStorage.getItem(configKeyName);
  }

  // gravar dados do localStorage
  setConfigData(showSlide?: boolean, name?: string, userName?: string) {
    let config = {
      showSlide: false,
      name: '',
      userName: '',
    }
    if(showSlide){
      config.showSlide = showSlide;
    }
    if(name){
      config.name = name;
    }
    if(userName){
      config.userName = userName;
    }

    localStorage.setItem(configKeyName, JSON.stringify(config));
  }

}
