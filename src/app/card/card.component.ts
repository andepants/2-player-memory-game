import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() resetChosenCards!: Function;
  @Input() removeOutOfGameCards!: Function;

  handleClick(): any {
    console.log('the chosen Cards', this.chosenCards);

    if (this.chosenCards[this.card.value]) {
      this.card.show = 'chosen';
      console.log('We Found A Match!');
      this.removeOutOfGameCards();
      return;
    }
    this.chosenCards[this.card.value] = this.index;
    console.log('the chosen Cards', this.chosenCards)

    console.log(Object.keys(this.chosenCards).length, 'length of chosen cards');
    setTimeout(() => {
      if (Object.keys(this.chosenCards).length >= 2) {
        this.resetChosenCards();
        this.card.show = 'chosen';
        setTimeout(() => {
          console.log(this.shuffledCards, 'shuffledCards');
          this.newTurn(this.shuffledCards);
        }, 2000);
        return;
      }
    }, 500);

    this.card.show = 'chosen';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.chosenCards, 'changed');
    if (changes['chosenCards']) {
      this.chosenCards = changes['chosenCards'].currentValue
        ? changes['chosenCards'].currentValue
        : this.chosenCards;
    }
  }
}
