import { Injectable } from '@angular/core';

//album model
import {Album} from '../album.model';

//import album list
import {ALBUMS} from '../mock-albums';


@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums(){
    return ALBUMS;
  }

  getAlbumById(albumId: number){
    for(var i =0; i <= ALBUMS.length - 1; i++){
      if(ALBUMS[i].id === albumId){
        return ALBUMS[i];
      }
    }
  }

}
