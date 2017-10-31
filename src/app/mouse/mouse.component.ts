import { Component, OnInit, AnimationEntryMetadata } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationEvent,
} from '@angular/animations';


enum MouseState {
  Init = 'init',
  Hover = 'hover',
  Press = 'press',
}

const animation: AnimationEntryMetadata = trigger('animationState', [
  state(MouseState.Init, style({
    transform: 'scale(1.0)'
  })),
  state(MouseState.Hover, style({
    transform: 'scale(1.2)'
  })),
  state(MouseState.Press, style({
    transform: 'scale(1.2)',
    backgroundColor: '#8f5a7a'
  })),
  transition(`${MouseState.Init} => ${MouseState.Hover}`, animate('400ms ease-in')),
  transition(`${MouseState.Hover} => ${MouseState.Init}`, animate('200ms ease-out')),
  transition(`${MouseState.Hover} => ${MouseState.Press}`, animate('400ms ease-in')),
  transition(`${MouseState.Press} => ${MouseState.Init}`, animate('200ms ease-out')),
]);

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.sass'],
  animations: [animation],
})
export class MouseComponent implements OnInit {
  MouseState = MouseState;

  private mouseState: MouseState;

  constructor() { }

  ngOnInit() {
    this.mouseState = MouseState.Init;
  }

  private setMouse = (s: MouseState): void => {
    this.mouseState = s;
  }
}
