// TODO: write code here
import Game from './Game';

export default class App {
  static init() {
    this.game = new Game(4);
    this.game.init();
  }
}
