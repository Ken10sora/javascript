// ▪️最大値と最小値を表示
function findMaxMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

console.log(findMaxMin([1, 2, 3, 10, 100]));

// ▪️配列の数字を2倍にして表示
const numbers = [7, 14, 21];

function doubleArrayValues(arr) {
  for(let i = 0 ; i < arr.length ; i++) {
    arr[i] *= 2
  }
  return arr;
}

const doubleNumbers = doubleArrayValues(numbers);

console.log(doubleNumbers);

// ▪️フィルター機能の実装
const filters = [1, 5, 10, 20, 25];

const afterFilter = filters.filter((num) => num % 10 === 0);

console.log(afterFilter);