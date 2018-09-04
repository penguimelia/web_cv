import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit {

  greeting: string;
  greetings: Array<string>;

  constructor() {
    this.greetings = ['Ciao!', 'Hola!', 'Bonjour!', 'Guten tag!', 'Hallå!', 'Hello!'];
    this.greeting = 'Hello!';
  }

  ngOnInit() {
    //emit value in sequence every 1 second
    var source = interval(1500);
    //output: 0,1,2,3,4,5....
    var subscribe = source.subscribe(val => {
      this.greeting = this.greetings[val % this.greetings.length]))
    };
  }


}
