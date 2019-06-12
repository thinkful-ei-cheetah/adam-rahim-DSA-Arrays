'use strict';
const Array = require('./array-class');

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // Array { length: 6, _capacity: 12, ptr: 3 }

  arr.pop();
  arr.pop();
  arr.pop();
  // Array { length: 3, _capacity: 12, ptr: 3 }

  console.log(arr);
}

main();
