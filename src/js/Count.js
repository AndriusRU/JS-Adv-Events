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
    this.curHits += 1;
    this.countHit.innerHTML = this.curHits;
  }

  increaseMiss() {
    this.curMiss += 1;
    this.countMiss.innerHTML = this.curMiss;
  }

  getMiss() {
    return this.curMiss;
  }
}
