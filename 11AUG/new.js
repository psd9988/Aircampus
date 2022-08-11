function myFunc(){
    return new Promise(function(resolve, reject){

        let error = true;

        if(!error){
            resolve('Hello World');
        }else{
            reject('Error');
        }}).then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    }).finally(function(){
        console.log('Finally');
    }).then(function(){
        console.log('Then');
    }).catch(function(){
        console.log('Catch');
    }   );
}

myFunc();