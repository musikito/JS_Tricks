/*
*You can take advantage of the closure scope in Javascript to pass arguments to callback functions.
*Check this example:
*/
function callback(a, b) {
  return function() {
    console.log('sum = ', (a+b));
  }
}

var x = 1, y = 2;
document.getElementById('someelem').addEventListener('click', callback(x, y));
