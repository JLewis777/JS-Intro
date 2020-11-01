var textOne = Number(prompt('Calculator', 'First number'));
var textTwo = prompt('Calculator', 'Operator');
var textThree = Number(prompt('Calculator', 'Second number'));

if (textTwo === '+') {
  var sum = add(textOne, textThree)
  alert(`${textOne} + ${textThree} = ${sum}`)
}

if (textTwo === '-') {
  var left = subtract(textOne, textThree)
  alert(`${textOne} - ${textThree} = ${left}`)
}

if (textTwo === '*') {
  var result = multiply(textOne, textThree)
  alert(`${textOne} * ${textThree} = ${result}`)
}

if (textTwo === '/') {
  var quotient = divide(textOne, textThree)
  alert(`${textOne} / ${textThree} = ${quotient}`)
}


function add(numberOne, numberTwo) { // When logging it do not call 'Function'
  var whole = numberOne + numberTwo;
  return whole;
}

function subtract(numberOne, numberTwo) {
  var rest = numberOne - numberTwo;
  return rest;
}

function multiply(numberOne, numberTwo) {
  var product = numberOne * numberTwo;
  return product;
}

function divide(numberOne, numberTwo) {
  var difference = numberOne / numberTwo;
  return difference;
}
