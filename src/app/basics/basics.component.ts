import { Component, OnInit } from '@angular/core';


export enum State {
  Original = 'original',
  Basics = 'basics',
  Easing = 'easing',
  Delaying = 'delaying',
  Stepped = 'stepped',
  Parallel = 'parallel',
}

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.sass']
})
export class BasicsComponent implements OnInit {
  State = State; // Make enum a property of this container
  public state: State;

  constructor() { }

  ngOnInit() {
    this.state = State.Original;
  }

  setState = (state: State) => this.state = state;

  getStyle = (state: State) => this.state === state;
}
