// 7. Create a function that filters out negative numbers

let arr = [1, 2, -3, 4, -5, 6, 7, -8, 9, -10];

let newArr = arr.filter(function(num) {
  return num > 0;
});

console.log(newArr);