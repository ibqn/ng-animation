import { Component, OnInit, AnimationEntryMetadata, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
  AnimationEvent,
} from '@angular/animations';

import { State } from '../basics/basics.component';

const animation: AnimationEntryMetadata = trigger('animationState', [
  state(State.Original, style({
    backgroundColor: '#47748f',
    transform: 'scale(1)'
  })),
  state('basics', style({
    backgroundColor: '#440000',
    transform: 'scale(1.8)'
  })),
  state('easing', style({
    backgroundColor: '#812170',
    transform: 'scale(1.5)'
  })),
  state('delaying', style({
    backgroundColor: '#985b00',
    transform: 'scale(1.2)'
  })),
  state(State.Stepped, style({
    backgroundColor: '#549a76',
    transform: 'scale(1)'
  })),
  state(State.Parallel, style({
    backgroundColor: '#065e65',
    transform: 'scale(0.4)'
  })),
  transition('* => basics', animate('800ms')),
  transition('* => original', animate('200ms')),
  transition('* => easing', animate('800ms ease-in-out')),
  transition('* => delaying', animate('800ms 1200ms ease-out')),
  transition(`* => ${State.Stepped}`, animate('3000ms ease-in-out', keyframes([
    style({ backgroundColor: '#dd9344', transform: 'scale(1.1)', offset: 0.2 }),
    style({ backgroundColor: '#5c2346', transform: 'scale(0.8)', offset: 0.4 }),
    style({ backgroundColor: '#1b1b1b', transform: 'scale(1.2)', offset: 0.7 }),
    style({ backgroundColor: '#549a76', transform: 'scale(1.0)', offset: 0.9 }),
  ]))),
  transition(`* => ${State.Parallel}`, group([
    animate('1000ms ease-out', style({
      backgroundColor: '#065e65'
    })),
    animate('2000ms ease-out', style({
      transform: 'scale(0.4)'
    })),
  ]))
]);


@Component({
  selector: 'app-animation-box',
  templateUrl: './animation-box.component.html',
  styleUrls: ['./animation-box.component.sass'],
  animations: [animation]
})
export class AnimationBoxComponent implements OnInit {
  @Input() changeState: string;
  messages: string[];

  constructor() { }

  ngOnInit() {
    this.messages = [];

    // Push initial value
    this.messages.push('On ng init');
  }

  animationBegin = (e: AnimationEvent) => this.message(e);

  animationEnd = (e: AnimationEvent) => this.message(e);

  private message = (e: AnimationEvent) => this.messages.push(`${e.phaseName}: ${e.fromState} => ${e.toState} in ${e.totalTime} secs.`);
}
