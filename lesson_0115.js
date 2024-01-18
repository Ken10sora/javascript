// ▪️最大値と最小値を出力する。
function findMaxMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

console.log(findMaxMin([1, 2, 3, 4, 5]));

// ▪️条件分岐とfor文を組み合わせたシンプルな構文。
function fizzBuzz() {
  for(let i = 1 ; i <= 48 ; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if(i % 3 === 0) {
      console.log('Fizz');
    } else if(i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// ▪️配列の数字を2倍にして出力する。
const numbers = [5, 10, 15];

function doubleArrayValues(arr) {
  for(let i = 0 ; i < arr.length ; i++) {
    arr[i] *= 2
  }
  return arr;
}

const doubleNumbers = doubleArrayValues(numbers);

console.log(doubleNumbers);

// ▪️文字列を反対にして出力する。
const originalString = 'Australia';

function reverseString(str) {
  return str.split('').reverse().join('');
}

const reversed = reverseString(originalString);

console.log(reversed);