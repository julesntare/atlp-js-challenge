// prime number

const listOfNums = [4, 19, 5, 2, 0, 47, 13, 155];
let primeNumbers = [];
let count = 0, inc = 0;

while(inc < listOfNums.length) {
    if (listOfNums[inc] > 1) {
    for (let i = 2; i <= listOfNums[inc]; i++) {
      if (listOfNums[inc] % i == 0) {
        count += 1;
      }
    }
    if(count == 1) {
      primeNumbers.push(listOfNums[inc]);
    }
  }
  count = 0;
  inc += 1;
}

// console.log(primeNumbers);

// palindrome text
function isPalindrome(text) {
    for (let i = 0; i < text.length / 2; i++) {
      if (text[i] !== text[text.length - 1 - i]) {
        return false;
      }
    }
    return true;
}

// console.log(isPalindrome("maam"));


// reverse an Array
function reverseArray(items) {
  let reversedArr = [];
  for(let i = items.length -1; i >= 0; i--) {
    reversedArr.push(items[i]);
  }
  return reversedArr;
}

// console.log(reverseArray([4, 6, 29, 68, 2]))

// inplace reverse an  Array

function inplaceReverseArray(items) {
  let len = items.length,
      middle = Math.floor(len / 2),
      temp = null;

  for (let i = 0; i < middle; i++) {
     temp = items[i];
     items[i] = items[(len-1) - i];
     items[(len-1) - i] = temp;
  }
  return items;
}

// console.log(inplaceReverseArray([4, 6, 29, 68, 2]))

// array to object
function arrayToObject(arr) {
  let madeObj = {};
  
  for(let i = 0; i < arr.length; i++) {
    madeObj[arr[i].split(' ')[0]] = {"second-name":arr[i].split(' ')[1], "age": arr[i].split(' ')[2]};
  }
  
  return madeObj;
}

// console.log(arrayToObject(["Patrick wyne, 30",
//                 "lil wyne, 32", 
//                 "Eric mimi, 21",
//                 "Dodos deck, 21",
//                 "Alian Dwine, 22",
//                 "Patrick wyne, 33",
//                 "Patrick wyne, 100",
//                 "Patrick wyne, 40"]));

