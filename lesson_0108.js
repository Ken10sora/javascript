function fizzBuzz() {
  for(let i = 1 ; i <= 45 ; i++){
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if(i % 3 === 0) {
      console.log('FIzz');
    } else if(i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i)
    }
  }
}

fizzBuzz();

// ▪️配列の数字を2倍にして出力する。
const numbers = [3, 5, 7];

function doubleArrayValues(arr) {
  for(let i = 0 ; i < arr.length ; i++) {
    arr[i] *= 2
  }
  return arr;
}

const doubleNumbers = doubleArrayValues(numbers);

console.log(doubleNumbers);


// ▪️文字列を反対にして出力する。
const originalString = 'Japan';

function reverseString(str) {
  return str.split('').reverse().join('');
}

const reversed =  reverseString(originalString);
console.log(reversed);
