import gobImg from '../img/goblin.png';

export default class Goblin {
  static getGoblin(place) {
    const goblin = document.createElement('img');
    goblin.src = gobImg;
    place.appendChild(goblin);
  }

  static goblinThere(place) {
    if (place.children[0] && place.querySelector('img')) {
      console.log('ttt');
      return true;
    }
    return false;
  }
}
