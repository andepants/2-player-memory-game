import { Component } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent {
  board: Card[] = [
    { name: 'Two of Clubs', value: '2C', image: '../../assets/cards/2C.png' },
    { name: 'Two of Clubs', value: '2C', image: '../../assets/cards/2C.png' },
    { name: 'Two of Hearts', value: '2H', image: '../../assets/cards/2H.png' },
    { name: 'Two of Hearts', value: '2H', image: '../../assets/cards/2H.png' },
    { name: 'Ace of Spades', value: 'AS', image: '../../assets/cards/AS.png' },
    { name: 'Ace of Spades', value: 'AS', image: '../../assets/cards/AS.png' },
    { name: 'Queen of Hearts', value: 'QH', image: '../../assets/cards/QH.png' },
    { name: 'Queen of Hearts', value: 'QH', image: '../../assets/cards/QH.png' },
    { name: 'King of Diamonds', value: 'KD', image: '../../assets/cards/KD.png' },
    { name: 'King of Diamonds', value: 'KD', image: '../../assets/cards/KD.png' },
    { name: 'Jack of Spades', value: 'JS', image: '../../assets/cards/JS.png' },
    { name: 'Jack of Spades', value: 'JS', image: '../../assets/cards/JS.png' },
    { name: 'Ten of Clubs', value: '10C', image: '../../assets/cards/10C.png' },
    { name: 'Ten of Clubs', value: '10C', image: '../../assets/cards/10C.png' },
    { name: 'Nine of Diamonds', value: '9D', image: '../../assets/cards/9D.png' },
    { name: 'Nine of Diamonds', value: '9D', image: '../../assets/cards/9D.png' },
    { name: 'Eight of Spades', value: '8S', image: '../../assets/cards/8S.png' },
    { name: 'Eight of Spades', value: '8S', image: '../../assets/cards/8S.png' },
    { name: 'Seven of Clubs', value: '7C', image: '../../assets/cards/7C.png' },
    { name: 'Seven of Clubs', value: '7C', image: '../../assets/cards/7C.png' },
  ];
}
