/**
 * Created by A4811584 on 15/02/2017.
 */
const Test = require('../../src/try1/mod1');

describe('Test de la classe de test', () => {
  it('create a test', () => {
    let t = new Test(1);
    expect(t.hello(true)).toBe(1);
  })
});