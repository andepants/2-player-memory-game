import { Component, Input } from '@angular/core';
import { Card } from '../card';
import { ChosenCards } from '../chosen-cards';
import { ChosenCardService } from '../chosen-card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  chosenCardState: any;

  constructor(private chosenCardService: ChosenCardService) {
    this.chosenCardState = this.chosenCardService.getState();
  }

  updateChosenCardState(card : Card): void {
    this.chosenCardState = this.chosenCardService.getState();
    this.chosenCardService.setState({...this.chosenCardState, [card.value] : card.value});
    this.chosenCardState = this.chosenCardService.getState();
  }

  @Input() card!: Card;
  @Input() index!: number;

  handleClick(): any {
    this.updateChosenCardState(this.card)
    console.log('clicked', this.card);
    console.log(this.chosenCardState, 'chosenCardState');
    console.log(this.chosenCardService.getState(), 'chosenCardService.getState()');
    this.card.show = 'chosen';
  }
}
