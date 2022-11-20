number = 10;

function add() {
  return (number += 5);
}

function subtract() {
    return (number -= 5);
  }

function multiply() {
    return (number *= 5);
  }

function divide() {
    return (number /= 5);
  }

function add(a, b) {
    return (a + b);
  }

function subtract(a, b) {
    return (a - b);
  }

function multiply(a, b) {
    return (a * b);
  }

function divide(a, b) {
    return (a / b);
  }

function increment(n){
    return (++n);
}

function decrement(n){
    return (--n);
}

function makeInt(string){
    return parseInt(string,10)
  }

  function preserveDecimal(string){
    return parseFloat(string)
  }
  