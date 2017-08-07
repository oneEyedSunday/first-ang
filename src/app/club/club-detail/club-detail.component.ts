import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
//for navigate
import {Router} from '@angular/router';
//illmport { Location } from '@angular/common';
import { Club} from '../../club.model';

import {ClubService} from '../../services/club.service';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styles: [],
  providers: [ClubService]
})
export class ClubDetailComponent implements OnInit {
  code: string = null;
  currentClub: Club;
  constructor(private route: ActivatedRoute, private clubService: ClubService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((url)=>{
      //console.log(url);
      this.code = url["code"];
    });

    /*
    if(var chk = this.clubService.getClubByCode(this.code) == null){
      this.route.navigate(["home"]);
    }

    */
    var chk = this.clubService.getClubByCode(this.code);
    if(chk === null){
      this.router.navigate([""]);
    }
    this.currentClub = chk;
    //console.log(this.currentClub);
  }

}
