import { Injectable } from '@angular/core';

//import data structure for club
import {Club} from '../club.model';



@Injectable()
export class ClubService {

  constructor() { }

  CLUBS: Club[] = [
  {
    id: 1,
    name: "Club Atletico De Madrid",
    code: "ATM",
    coach: "Diego 'Cholo' Simeone",
    stadium: "Vicente Caledron",
    captain: "Diego Godin"
  },
  {
    id: 2,
    code: "CABJ",
    name: "Club Atletico Boca Juniors",
    coach: "Some Argenbtibe Guy",
    stadium: "Estadio Monumental",
    captain: "Fernando Gago"
    }
  ];

  getClubs(){
    //get list of clubs
    return this.CLUBS;
  }

  getClubById(){
    //probably change it to something else
  }

  getClubByCode(clubcode: string) {
    for(var i =0; i <=  this.CLUBS.length - 1; i++){
      if(this.CLUBS[i].code === clubcode){
        return this.CLUBS[i];
      }
    }
    return null;
  }

}
