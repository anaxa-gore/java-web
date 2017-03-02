/**
 * Created by A4811584 on 15/02/2017.
 */

class Test {
    /**
     * @param {number} number Le nom du test
     */
    constructor(number) {
        this.nom = number;
    }

    /**
     * 
     * @returns {Number}
     */
    hello() {
        return this.nom;
    }
}

module.exports = Test;