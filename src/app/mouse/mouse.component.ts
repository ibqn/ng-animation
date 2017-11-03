import { Component, OnInit, AnimationEntryMetadata } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationEvent,
} from '@angular/animations';


export enum MouseState {
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

  private _mouseState: MouseState;

  public get mouseState() { return this._mouseState; }

  constructor() { }

  ngOnInit() {
    this._mouseState = MouseState.Init;
  }

  public setMouse = (s: MouseState): void => {
    this._mouseState = s;
  }
}
