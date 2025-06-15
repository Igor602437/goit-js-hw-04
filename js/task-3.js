function filterArray(numbers, value) {
  // console.log(numbers.length);
  const newArrayNumbers=[];
  let i = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > value) {
      newArrayNumbers[i] = element;
      i++;
    }
  }
  return newArrayNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
// console.log('');

// console.log(filterArray([19, 11, 2, 41, 76, 243], 38)); // [41, 76, 243]
