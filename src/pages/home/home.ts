import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Plugins} from '../../providers/plugins';
import {UploadingPage} from '../uploading/uploading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images: Array<string> = [];
  private nav:NavController = null; // Thomas

  constructor(private plugins: Plugins, 
              public navCtrl: NavController) {
    
  }

  openAlbums = () : void => {
        this.plugins.albums.open().then((imgUrls) => {            
            imgUrls.forEach((imageUrl: string) : void => {
                if(imageUrl){                  
                  this.images.push(imageUrl);
                }
            }); 
        });        
    }
      
  openCamera = () : void => { 
      this.plugins.camera.open().then((imageUrl) => { 
        if(imageUrl) {
          this.images.push(imageUrl);            
        }
    });
  }
  
  startUploading = () : void => {
    this.nav.setRoot(UploadingPage, {
        images: this.images
    });    
  }
}

