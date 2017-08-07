import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

      items = [{
      'one': 'Item One',
      'two': 'Item Two'
      },
      {
      'one' : 'item One',
      'two' : 'item Two'
      }];
  constructor() { }

  ngOnInit() {
  }

}
