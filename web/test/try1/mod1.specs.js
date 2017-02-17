/**
 * Created by A4811584 on 15/02/2017.
 */
require('../../node_modules/core-js/shim');
const Test = require('../../src/try1/mod1');

describe('Test de la classe de test', () => {
  it('create a test', () => {
    let t = new Test("Toto");
    console.log(t.hello());
    expect(t.hello()).toBe("Hello Toto");
  })
});