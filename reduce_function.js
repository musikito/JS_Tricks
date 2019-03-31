/*
The reduce() method applies a function against an accumulator 
and each element in the array (from left to right) to reduce it to a single value.

I've seen struggling with how to get the total when we did the Database
*/

const array = [1,2,3,4,5,6];
const sum = (x, y) => x + y;
const array_sum = array.reduce(sum, 0);
console.log(`The sum of array: ${array} is ${array_sum}`);