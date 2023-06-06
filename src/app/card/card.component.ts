import { Component, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  show = true;

  @Input() card!: Card;
  handleClick(): any {
    console.log('clicked', this.card, this.show);
    this.show = !this.show;
  }
}
