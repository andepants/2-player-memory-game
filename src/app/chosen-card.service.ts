import { Injectable } from '@angular/core';
import { ChosenCards } from './chosen-cards';

@Injectable({
  providedIn: 'root'
})
export class ChosenCardService {
  private turnState: boolean = true;
  private chosenCardState: ChosenCards = {};

  constructor() { }

  getTurn(): boolean {
    return this.turnState;
  }

  setTurn(newState: boolean): void {
    this.turnState = newState;
  }

  getState(): any {
    return this.chosenCardState;
  }

  setState(newState: any): void {
    this.chosenCardState = newState;
  }
}
