

let numberPromise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
        var timeout=0;
        for(var i=0;i<10;i++)
        {
        setTimeout(()=>{
            timeout=timeout+1000;
            console.log("timeout:"+timeout);
            console.log(i)},1000)}
  
    reject("this is an error");
  });
  numberPromise.then(success=>console.log(success)).catch(error=>{
      console.log(error);
  });
  

  console.log("sravan");

let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });
  promise.then(sucess=>{
      console.log(sucess);
  }).catch(error=>{
      console.log(error);
  })

var keepsHisWord;
keepsHisWord = true;
promise1 = new Promise(function(resolve, reject) {
  
    reject("The man doesnt want to keep his word");
  }
).catch(error=>console.log(error));
console.log(promise1);

