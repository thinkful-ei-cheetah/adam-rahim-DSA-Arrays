'use strict';

//5. URLify a string
function urlify(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      i++;
      newStr = newStr.concat('%20');
    }
    newStr = newStr + str[i];
  }

  return newStr;

  //return str.replace(' ', '%20');
}

urlify('www.thinkful.com /tauh ida parv een');

// 6. Filtering an array

function arrayFilter(arr, filt) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= filt) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

arrayFilter([7, 6, -3, 5, -2, 1, 5, 3, 8], 5);

function maxSum(arr) {
  let currentSum = 0;
  let largestSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > currentSum + arr[i + 1]) {
      largestSum = currentSum;
    }
  }
  return largestSum;
}

maxSum([4, 6, -3, 5, -2, 1]);

// 8. Merge arrays
function mergeArrays(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr.sort((a, b) => a - b);
}

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

// 9. Remove Characters

function removeCharacter(string, [...characters]) {
  let newStr = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (characters.indexOf(char) < 0) {
      newStr = newStr + char;
    }
  }
  return newStr;
}

removeCharacter('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

// 10.
function products(arr) {
  let newArr = [];
  let value = 1;

  for (let i = 0; i < arr.length; i++) {
    value = value * arr[i];
    // newArr.push(value / arr[i]);
  }

  for (let j = 0; j < arr.length; j++) {
    newArr.push(value / arr[j]);
  }
  return newArr;
}

products([1, 3, 9, 4]);

function darray(array, rows, columns) {
  //loop outer array.
  //loop through inner array.
  //on finding 0 in inner array we'll have column in j and row in i.
  //return to arr row 1 column j to delete.
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        array[i].forEach((element, index, array) => {
          return (array[index] = 0);
        });

        //[2,1], [4,1]
      }
    }
  }
  return array;
}

console.log(
  darray([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ])
);
