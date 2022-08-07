// find second last digit in array

var arr = [1,2,3,4,5,6,7,8,9,10];

function secondLastDigit(arr) {
    var last = arr.length - 1;
    var secondLast = arr.length - 2;
    return arr[secondLast];
}

console.log(secondLastDigit(arr));

