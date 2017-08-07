import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Album } from '../album.model';

//import service
import {AlbumService} from '../services/album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  //declare service as provider
  providers: [AlbumService]
})


export class AlbumDetailComponent implements OnInit {
  albumId: number = null;
  albumToDisplay: Album;

  //instantiate service in component constructor
  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) { }

  ngOnInit() {

  //console.log(this.route.params);
  //this.route.params.forEach((x)=>console.log(x));
    this.route.params.forEach((urlParameters)=>{
      this.albumId = parseInt(urlParameters["id"]);
    });

    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);

    /*

    this.route.params.forEach(function(urlParameters){
      this.albumId = parseInt(urlParameters["id"]);
    });

    */
  }

}
