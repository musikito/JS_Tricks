/*
You also can track the time between function calls with
console.tima() and console.timeEnd()
*/
console.time();
let arr = new Array(1000);
arr.forEach(element =>{
  arr = new Object();
});
console.timeEnd();
