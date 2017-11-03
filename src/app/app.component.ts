import { Component } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { slideAnimation } from './slide.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routerAnimations', [
      transition('* => *', slideAnimation)
    ])
  ]
})
export class AppComponent {
  prepareRouteTransition = (outlet) => {
    const animation = outlet.activatedRouteData['animation'] || {};
    console.log(`val ${animation['value']}`);
    return animation['value'] || null;
  }
}
