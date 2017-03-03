/**
 * Created by A4811584 on 15/02/2017.
 */

class Test {
  /**
   * @param {number} number Le number du test
   */
  constructor(number) {
    this.number = number;
  }

  /**
   * @param {Boolean} test Si true, retourne le nombre, sinon retourne -1
   * @returns {Number}
   */
  hello(test) {
    if (test) {
      return this.number;
    } else {
      return -1;
    }
  }

  byebye() {
    return this.number + 2;
  }
}

module.exports = Test;