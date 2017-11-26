import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../games/game';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent  {
  @Input('gameProp') game : Game;
  @Output() onReacted = new EventEmitter<boolean>()

  react(likeOrDislike : boolean) {
    this.onReacted.emit(likeOrDislike);
  }
}
