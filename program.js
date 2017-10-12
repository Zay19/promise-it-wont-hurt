//fulfilling a promise//
/* var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
     fulfill('FULFILLED!')}, 300);})
   promise.then(console.log) */

   //rejecting a promise//
  /* var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
     reject((new Error('REJECTED!')));}, 300);})
     function onReject(error){
         console.log(error.message);
   }
promise.then(null, onReject); */

//reject and resolve a promsie//
/* var promise = new Promise (function (fulfill, reject) {
    fulfill('I FIRED')
    reject((new Error('I DID NOT FIRE')))
})
function onReject(error){
    console.log(error.message)
}
promise.then(console.log, onReject) */

//asynchronous
/* var promise = new Promise (function(fulfill, reject){
    fulfill('PROMISE VALUE')
})
promise.then(console.log)
console.log('MAIN PROGRAM') */

//promise after promise
/* var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);*/

//values and promises
/* function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log); */