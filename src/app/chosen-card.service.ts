import { Injectable } from '@angular/core';
import { ChosenCards } from './chosen-cards';

@Injectable({
  providedIn: 'root'
})
export class ChosenCardService {
  private chosenCardState: ChosenCards = {};

  constructor() { }

  getState(): any {
    return this.chosenCardState;
  }

  setState(newState: any): void {
    this.chosenCardState = newState;
  }
}
