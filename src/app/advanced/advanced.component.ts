import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, animate, style, stagger } from '@angular/animations';


interface Spoon {
  id: number;
  name: string;
}

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.sass'],
  animations: [
    trigger('spoonAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: '0' }), { optional: true }),
        query(':enter', stagger('100ms', animate('1s', style({ opacity: '1' }))), { optional: true })
      ])
    ])
  ]
})
export class AdvancedComponent implements OnInit {
  private _spoons: Spoon[];

  public get spoons() { return this._spoons; }

  constructor() { }

  ngOnInit() {
    this._spoons = [];
  }

  showSpoons = () => {
    this._spoons = [
      { id: 1, name: 'Absinthe' },
      { id: 2, name: 'Bouillon' },
      { id: 3, name: 'Caviar' },
      { id: 4, name: 'Coffee' },
      { id: 5, name: 'Dessert' },
      { id: 6, name: 'Egg' },
      { id: 7, name: 'Horn' },
      { id: 8, name: 'Iced Tea' },
      { id: 9, name: 'Marrow' },
      { id: 10, name: 'Melon' },
      { id: 11, name: 'Parfait' },
      { id: 12, name: 'Salt' },
      { id: 13, name: 'Soup' },
      { id: 14, name: 'Saucier' },
    ];
  }

}
