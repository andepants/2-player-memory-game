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
  isTimeoutRunning: boolean = false;
  @Input() card!: Card;
  @Input() index!: number;
  @Input() flipAllMatches!: Function;
  @Input() shuffledCards!: Card[];
  @Input() resetGuesses!: Function;
  @Input() turn!: boolean;
  @Output() turnChange = new EventEmitter<boolean>();
  @Input() player1Score!: number;
  @Input() player2Score!: number;
  @Output() player1ScoreChange = new EventEmitter<number>();
  @Output() player2ScoreChange = new EventEmitter<number>();

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
    this.turn = this.chosenCardService.getTurn();
    this.chosenCardService.setTurn(!turn);
    this.turn = this.chosenCardService.getTurn();
    this.turnChange.emit(!turn)
  }

  handleClick(): any {
    this.isTimeoutRunning = this.chosenCardService.getTimeout();
    if (this.isTimeoutRunning) {
      return;
    }
    this.chosenCardState = this.chosenCardService.getState();
    if (this.card.show === 'chosen' || this.card.show === 'matched') { // already chosen
      return;
    }
    this.card.show = 'chosen';
    if (this.chosenCardState[this.card.value]) { // found match
      if (this.turn) {
        this.player1Score++;
        this.player1ScoreChange.emit(this.player1Score);
      } else {
        this.player2Score++;
        this.player2ScoreChange.emit(this.player2Score);
      }
      this.flipAllMatches(this.shuffledCards);
      this.chosenCardService.setState({});
      return;
    }
    this.updateChosenCardState(this.card)
    if (Object.keys(this.chosenCardState).length >= 2) { // no match - 2 cards picked
      this.chosenCardService.setTimeout(true);
      this.isTimeoutRunning = this.chosenCardService.getTimeout();
      setTimeout(() => {
        this.resetGuesses(this.shuffledCards);
        this.chosenCardService.setState({});
        this.updateTurnState(this.turn);
        this.chosenCardService.setTimeout(false);
        this.isTimeoutRunning = this.chosenCardService.getTimeout();
      }, 1000);
    }
  }
}
