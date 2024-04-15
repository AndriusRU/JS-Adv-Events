export default class Field {
  constructor(boardSize) {
    const field = document.querySelector('.field');
    if (!field) {
      throw new Error('Не найден элемент Fie1d!!!');
    }
    this.field = field;
    this.boardSize = boardSize;
    this.curPos = null;
    this.curElem = null;
  }

  drawHoles() {
    this.holes = [];
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const hole = document.createElement('div');
      hole.classList.add('hole');
      this.holes.push(hole);
      this.field.appendChild(hole);
    }
    document.body.appendChild(this.field);
  }

  getHole() {
    if (this.holes.length > 0) {
      const idx = Math.floor(Math.random() * (this.boardSize ** 2));

      // чтобы не дублировалась позиция
      if (this.curPos === idx) {
        return this.getHole();
      }
      this.curPos = idx;
      this.curElem = this.holes[idx];
    }
    return this.curElem;
  }

  clearField() {
    this.holes.forEach((hole) => {
      const elem = hole;
      elem.innerHTML = '';
    });
  }

  clickHole(callback) {
    this.clickEvent = (e) => {
      const isCurrent = e.target.closest('.hole') === this.currentElement;
      console.log(isCurrent);
      if (callback !== undefined) {
        callback(isCurrent);
      }
    };
  }

  remClick() {
    this.field.removeEventListener('click', this.clickEvent);
  }
}
