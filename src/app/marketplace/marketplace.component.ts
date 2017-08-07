import { Component, OnInit } from '@angular/core';
import {Album} from '../album.model';
import {Router} from '@angular/router';

//import service to component
import {AlbumService} from '../services/album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  //providers
  //this carries service to component
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {


  albums : Album[];
  
   goToDetailPage(clickedAlbum: Album){
    this.router.navigate(['albums', clickedAlbum.id]);
   }

   //add service to construictor
   //so on init of instance
   //service is available
  constructor(private router: Router, private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

}
