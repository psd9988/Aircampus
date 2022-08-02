// Given a string, if it is a palindrome return true else return false.

function palindrome(str){
  str1 = str.split('').reverse().join('')
  if(str == str1){
    return true
  }else{
    return false
  }

  
}console.log(palindrome('aircampus'))