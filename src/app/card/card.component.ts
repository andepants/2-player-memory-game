import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';
import { ChosenCards } from '../chosen-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() chosenCards!: ChosenCards;
  @Input() card!: Card;
  @Input() index!: number;
  @Input() newTurn!: Function;
  @Input() shuffledCards!: Card[];

  handleClick(): any {

    if (this.chosenCards[this.card.value]) {
      this.card.show = 'chosen';
      console.log('We Found A Match!');
      setTimeout(() => {
        this.newTurn(this.shuffledCards);
      }, 2000);
      return;
    }

    this.chosenCards[this.card.value] = this.index;
    console.log('We chose our second card! And its not a match!');
    console.log('the chosen Cards', this.chosenCards);
    console.log(Object.keys(this.chosenCards).length, 'length of chosen cards');
    if (Object.keys(this.chosenCards).length === 2) {
      this.chosenCards = {};
      this.card.show = 'chosen';
      setTimeout(() => {
        console.log(this.shuffledCards, 'shuffledCards');
        this.newTurn(this.shuffledCards);
      }, 2000);
      return;
    }

    this.card.show = 'chosen';
  }
}
