import { Component, OnInit } from '@angular/core';
import {Club} from '../../club.model';
import {ClubService} from '../../services/club.service';

@Component({
  selector: 'app-club',
  templateUrl: './home.component.html',
  styles: [],
  providers: [ClubService]
})
export class HomeComponent implements OnInit {

  clubs : Club[];

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubs = this.clubService.getClubs();
  }

}
