import { BuiltinMethod } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
   // properties
   name: string = "Luke Skywalker";
   height: number= 172;
   eye_Color: string = "blue";

  constructor() { }

  // startop metode det er her
  ngOnInit(): void {
    // Invoke a functions
    this.firstFunction();
    this.firstFunction();

    let temp2: string = this.createFunction();
    console.log(temp2);

    let temp: string = "flemming";
    console.log(temp);

    this.createFunction();
  }
  createFunction(): string {
    throw new Error('Method not implemented.');
  }
  firstFunction() {
    throw new Error('Method not implemented.');
  }
  btnklik(){

  }
}
