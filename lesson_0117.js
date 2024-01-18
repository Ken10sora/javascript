// ▪️最大値と最小値の表示
function findMaxMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

console.log(findMaxMin([1, 3, 5, 7, 9]));

// ▪️文字列を反対にして表示
const originalString = 'Ogerpon';

function reverseString(str) {
  return str.split('').reverse().join('');
}

const reversed = reverseString(originalString);

console.log(reversed);

// 条件分岐とfor文を組み合わせて表示
function fizzBuzz() {
  for(let i = 1 ; i <= 51 ; i++) {
    if(i % 2 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
    } else if(i % 2 === 0) {
      console.log('Fizz');
    } else if(i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();