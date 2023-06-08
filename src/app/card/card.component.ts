import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';
import { ChosenCardService } from '../chosen-card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  chosenCardState: any;
  @Input() card!: Card;
  @Input() index!: number;
  @Input() flipAllMatches!: Function;
  @Input() shuffledCards!: Card[];
  @Input() resetGuesses!: Function;
  @Input() turn!: boolean;
  @Output() turnChange = new EventEmitter<boolean>();

  constructor(private chosenCardService: ChosenCardService) {
    this.chosenCardState = this.chosenCardService.getState();
    this.turn = this.chosenCardService.getTurn();
  }

  updateChosenCardState(card : Card): void {
    this.chosenCardState = this.chosenCardService.getState();
    this.chosenCardService.setState({...this.chosenCardState, [card.value] : card.value});
    this.chosenCardState = this.chosenCardService.getState();
  }

  updateTurnState(turn : boolean): void {
    console.log(this.chosenCardService.getTurn(), 'this.chosenCardService.getTurn()');
    this.turn = this.chosenCardService.getTurn();
    this.chosenCardService.setTurn(!turn);
    this.turn = this.chosenCardService.getTurn();
    this.turnChange.emit(!turn)
    console.log('this.turn', this.turn);
  }

  handleClick(): any {
    console.log('shuffledCards', this.shuffledCards);
    this.chosenCardState = this.chosenCardService.getState();
    if (this.card.show === 'chosen') { // already chosen
      return;
    }
    this.card.show = 'chosen';
    if (this.chosenCardState[this.card.value]) { // found match
      this.flipAllMatches(this.shuffledCards);
    }
    this.updateChosenCardState(this.card)
    if (Object.keys(this.chosenCardState).length >= 2) { // no match - 2 cards picked
      console.log('chose 2+ cards');
      setTimeout(() => {
        this.resetGuesses(this.shuffledCards);
        this.chosenCardService.setState({});
        this.updateTurnState(this.turn);
      }, 1000);
    }
    console.log(this.chosenCardService.getState(), 'chosenCardService.getState()');
  }
}
