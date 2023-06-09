import { Component } from '@angular/core';
import { Card } from '../card';
import { ChosenCardService } from '../chosen-card.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent {

  player1Score: number = 0;
  player2Score: number = 0;
  chosenCardState: any;
  turn: boolean;

  constructor(private chosenCardService: ChosenCardService) {
    this.chosenCardState = this.chosenCardService.getState();
    this.turn = this.randomTurnGenerator();
    this.chosenCardService.setTurn(this.turn);
  }
  randomTurnGenerator(): boolean {
    if (Math.floor(Math.random() * 2) === 0) {
      return true;
    }
    return false;
  }

  newGame(): void {
    this.shuffledCards = this.shuffleBoard(this.board);
    for (let i = 0; i < this.shuffledCards.length; i++) {
      this.shuffledCards[i].show = 'not-chosen';
    }
    this.player1Score = 0;
    this.player2Score = 0;
    this.chosenCardService.setState({});
    this.turn = this.randomTurnGenerator();
    this.chosenCardService.setTurn(this.turn);
  }

  shuffleBoard(board: Card[]) : Card[]{
    let currentIndex = board.length;
    let temporaryValue: Card;
    let randomIndex: number;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = board[currentIndex];
      board[currentIndex] = board[randomIndex];
      board[randomIndex] = temporaryValue;
    }
    return board;
  }

  flipAllMatches(shuffledCards: Card[]) {
    this.chosenCardState = this.chosenCardService.getState();
    for (let i = 0; i < shuffledCards.length; i++) {
      if (this.chosenCardState[shuffledCards[i].value]) {
        shuffledCards[i].show = 'matched';
      }
    }
  }

  resetGuesses(shuffledCards: Card[]): void {
    for (let i = 0; i < shuffledCards.length; i++) {
      if (shuffledCards[i].show === 'chosen') {
        shuffledCards[i].show = 'not-chosen';
      }
    }
  }

  board: Card[] = [
    { name: 'Two of Clubs', value: '2C', image: '../../assets/cards/2C.png', show: 'not-chosen' },
    { name: 'Two of Clubs', value: '2C', image: '../../assets/cards/2C.png', show: 'not-chosen' },
    { name: 'Two of Hearts', value: '2H', image: '../../assets/cards/2H.png', show: 'not-chosen' },
    { name: 'Two of Hearts', value: '2H', image: '../../assets/cards/2H.png', show: 'not-chosen' },
    { name: 'Ace of Spades', value: 'AS', image: '../../assets/cards/AS.png', show: 'not-chosen' },
    { name: 'Ace of Spades', value: 'AS', image: '../../assets/cards/AS.png', show: 'not-chosen' },
    { name: 'Queen of Hearts', value: 'QH', image: '../../assets/cards/QH.png', show: 'not-chosen' },
    { name: 'Queen of Hearts', value: 'QH', image: '../../assets/cards/QH.png', show: 'not-chosen' },
    { name: 'King of Diamonds', value: 'KD', image: '../../assets/cards/KD.png', show: 'not-chosen' },
    { name: 'King of Diamonds', value: 'KD', image: '../../assets/cards/KD.png', show: 'not-chosen' },
    { name: 'Jack of Spades', value: 'JS', image: '../../assets/cards/JS.png', show: 'not-chosen' },
    { name: 'Jack of Spades', value: 'JS', image: '../../assets/cards/JS.png', show: 'not-chosen' },
    { name: 'Ten of Clubs', value: '10C', image: '../../assets/cards/10C.png', show: 'not-chosen' },
    { name: 'Ten of Clubs', value: '10C', image: '../../assets/cards/10C.png', show: 'not-chosen' },
    { name: 'Nine of Diamonds', value: '9D', image: '../../assets/cards/9D.png', show: 'not-chosen' },
    { name: 'Nine of Diamonds', value: '9D', image: '../../assets/cards/9D.png', show: 'not-chosen' },
    { name: 'Eight of Spades', value: '8S', image: '../../assets/cards/8S.png', show: 'not-chosen' },
    { name: 'Eight of Spades', value: '8S', image: '../../assets/cards/8S.png', show: 'not-chosen' },
    { name: 'Seven of Clubs', value: '7C', image: '../../assets/cards/7C.png', show: 'not-chosen' },
    { name: 'Seven of Clubs', value: '7C', image: '../../assets/cards/7C.png', show: 'not-chosen' },
  ];
  shuffledCards : Card[] = this.shuffleBoard(this.board);
}
