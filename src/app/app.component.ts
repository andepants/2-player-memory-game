import { Component } from '@angular/core';
import { ChosenCardService } from './chosen-card.service';

@Component({
  selector: 'app-root',
  providers: [ChosenCardService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '2-player-memory-game';
}
