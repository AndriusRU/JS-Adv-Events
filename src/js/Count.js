export default class Count {
  constructor() {
    this.countHit = document.querySelector('.hit');
    this.countMiss = document.querySelector('.miss');
  }

  init() {
    this.countHit.innerHTML = 0;
    this.curHits = +this.countHit.innerHTML;
    this.countMiss.innerHTML = 0;
    this.curMiss = +this.countMiss.innerHTML;
  }

  increaseHit() {
    this.curHits++;
    this.countHit.innerHTML = this.curHits;
  }

  increaseMiss() {
    this.curMiss++;
    this.countMiss.innerHTML = this.curMiss;
  }

  getMiss() {
    return this.curMiss;
  }
}