// Quest 1.
function countDown(time){
    var timerId = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timerId);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }
  
 // Quest 2.
  function randomGame(){
    var number;
    var times = 0;
    var timer = setInterval(function(){
      number = Math.random();
      times++
      if(number > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }

 // Quest 3.
  function isEven(number){
    return number % 2 === 0;
  }
  
 // Quest 4 
  function isOdd(num){
    return num % 2 !== 0;
  }

 // Quest 5.
  function isPrime(value) {
      for(var i = 2; i <= Math.sqrt(value); i++) {
          if(value % i === 0) {
              return false;
          }
      }
      return value > 1;
  }
  
 // Quest 6.
  function numberFact(number, fn){
    return fn(number);
  }
  
 // Quest 7.
  function find(array, fn){
    for(var i=0; i<array.length; i++){
      if(fn(array[i])) return array[i];
    }
  }
  
 // Quest 8.
  function findIndex(array, fn){
    for(var i=0; i<array.length; i++){
      if(fn(array[i])) return i;
    }
  }
  
 // Quest 9.
  function specialMultiply(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  };