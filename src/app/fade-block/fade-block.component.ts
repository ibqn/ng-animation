import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
} from '@angular/animations';

import { fadeAnimation } from './fade.animation';


@Component({
  selector: 'app-fade-block',
  templateUrl: './fade-block.component.html',
  styleUrls: ['./fade-block.component.sass'],
  animations: [ trigger('animationState', [
    transition('void => *', [
      useAnimation(fadeAnimation)
    ])
  ])]
})
export class FadeBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
