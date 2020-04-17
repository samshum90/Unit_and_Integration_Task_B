var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  //it should add add 1 to 4 and get 5
  it('it should add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })
  //it subtract 4 from 7 and get 3
  it('it should subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })
  //it should multiply 3 by 5 and get 15
  it('it should multiply', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.strictEqual(calculator.runningTotal, 15);
  })
  //divide 21 by 7 and get 3
  it('it should divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3)
  })
  //concatenate multiple number button clicks
  it('it should cancatenate mutiple number clicks', function(){
    calculator.runningTotal = 0;
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.strictEqual(calculator.runningTotal, 23)
  })
  it('it has to chain multiple operations together', function(){
    calculator.numberClick(10)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick(7)
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.operatorClick('/')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 7)
  });
  //clear the running total without affecting the calculation
  it('clear running total', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+');
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 16);
  });
});
