// TODO: write code here
import Field from './Field';
import Goblin from './Goblin';
import Count from './Count';

export default class Game {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  init() {
    this.field = new Field(this.boardSize);
    this.field.drawHoles();
    this.counts = new Count();
    this.onClickHole = this.clickMy.bind(this);
    document.querySelectorAll('.hole').forEach((item) => {
      item.addEventListener('click', this.onClickHole);
    });
    this.play();
  }

  play() {
    this.counts.init();
    setTimeout(function run() {
      if (this.counts.getMiss() !== 5) {
        this.field.clearField();
        this.curHole = this.field.getHole();
        Goblin.getGoblin(this.curHole);
        setTimeout(run.bind(this), 1000);
      }
    }.bind(this), 1000);
  }

  static endGame() {
    const end = document.querySelector('.endGame');
    end.classList.add('active');
  }

  clickMy(event) {
    const myTarget = event.target;
    const isGoblin = myTarget.closest('.hole').querySelector('img');
    if (isGoblin) {
      this.counts.increaseHit();
    } else {
      this.counts.increaseMiss();
    }

    if (this.counts.getMiss() >= 5) {
      this.endGame();
      document.querySelectorAll('.hole').forEach((item) => {
        item.removeEventListener('click', this.onClickHole);
      });
    }
  }
}
