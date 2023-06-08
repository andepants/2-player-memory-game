import { Component } from '@angular/core';
import { Card } from '../card';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent {

  shuffleBoard(board: Card[]) {
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
