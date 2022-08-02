let newArr = [1,[2,3],[4,[4,[4,4],4],5],[6,7]]
function flatten(arr){
  let flattenedArray = []
  for(let i = 0;i<arr.length;i++){

  if(Array.isArray(arr[i])){
    flattenedArray = [...flattenedArray, ...flatten(arr[i])]
  }else{
    flattenedArray.push(arr[i])
  }
  }  return flattenedArray
  
}

console.log(flatten(newArr));