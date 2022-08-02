// Given a string, replace the first occurrences of Ram with Shyam

function ramShyam(string){
  string = string.split(' ')
   string[string.indexOf('Ram')] = 'Shyam'
   return string.join(' ')
 }console.log(ramShyam('Ram owns a dog. Ram likes animals'))