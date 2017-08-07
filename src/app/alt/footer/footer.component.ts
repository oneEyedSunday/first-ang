import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class=" footer text-center"> Copyright &copy; &reg; {{year}}, Idiakose Sunday</div>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  d: Date;
  year: number;

  constructor() { }

  ngOnInit() {


    this.d = new Date();
    this.year = this.d.getFullYear();


     // alert(year);
  }

}
