// ▪️フィルター機能の実装
const filters = [5, 7, 8, 10];

const afterFilter = filters.filter((num) => num % 5 === 0);

console.log(afterFilter);

// ▪️配列の数字を2倍にして表示
const numbers = [7, 14, 21];

function doubleArrayValues(arr) {
  for(let i = 0 ; i < arr.length ; i++) {
    arr[i] *= 3
  }
  return arr;
}

const doubleNumbers = doubleArrayValues(numbers);

console.log(doubleNumbers);

// ▪️最大値と最小値を表示
function findMaxMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

console.log(findMaxMin([1, 2, 3, 4, 5]));