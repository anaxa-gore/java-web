/**
 * Created by A4811584 on 15/02/2017.
 */
class Test {
  /**
   * @param nom Le nom du test
   */
  constructor(nom) {
    this.nom = nom;
  }

  hello() {
    return "hello " + this.nom;
  }
}

module.exports = Test;