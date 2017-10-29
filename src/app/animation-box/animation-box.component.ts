import { Component, OnInit, AnimationEntryMetadata, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


const animation: AnimationEntryMetadata = trigger('animationState', [
  state('original', style({
    backgroundColor: '#47748f',
    transform: 'scale(1)'
  })),
  state('basics', style({
    backgroundColor: '#440000',
    transform: 'scale(1.8)'
  })),
  transition('* => basics', animate('800ms')),
  transition('* => original', animate('200ms'))
]);

@Component({
  selector: 'app-animation-box',
  templateUrl: './animation-box.component.html',
  styleUrls: ['./animation-box.component.sass'],
  animations: [animation]
})
export class AnimationBoxComponent implements OnInit {
  @Input() changeState: string;

  constructor() { }

  ngOnInit() {
  }

}
