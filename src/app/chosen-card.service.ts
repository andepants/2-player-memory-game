import { Injectable } from '@angular/core';
import { ChosenCards } from './chosen-cards';

@Injectable({
  providedIn: 'root'
})
export class ChosenCardService {
  private turnState: boolean = true;
  private isTimeoutRunning: boolean = false;
  private chosenCardState: ChosenCards = {};

  constructor() { }

  getTimeout(): boolean {
    return this.isTimeoutRunning;
  }

  setTimeout(newState: boolean): void {
    this.isTimeoutRunning = newState;
  }

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
