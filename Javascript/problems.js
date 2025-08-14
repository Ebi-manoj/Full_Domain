//1)Remove Duplicates
function removeDuplicates() {
  const arr = [1, 2, 3, 2, 4, 1];
  //   const unqiue = arr.filter((num, index) => arr.indexOf(num) == index) ;
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (arr[i] == arr[j]) {
        for (let k = j; k < size; k++) {
          [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
        }
        j--;
        size--;
      }
    }
  }
  arr.length = size;
  console.log(arr);
}

// removeDuplicates();
////////////////////////////////////////////////////////////////
//2)Split an array into chunks of size n.
function chunkArray(arr, n) {
  const result = [];
  let chunk = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count == n) {
      result.push(chunk);
      count = 0;
      chunk = [];
    }
    chunk.push(arr[i]);
    count++;
    if (i == arr.length - 1) {
      result.push(chunk);
    }
  }
  return result;
}
// console.log(chunkArray([1, 2, 3, 4, 5], 2));

/////////////////////////////////////////////////////
//3)Flatten Deeply Nested Array (without using .flat)

function flattenArray(arr, flattened = []) {
  for (const n of arr) {
    if (Array.isArray(n)) {
      flattenArray(n, flattened);
    } else {
      flattened.push(n);
    }
  }
  return flattened;
}
// console.log(flattenArray([1, [2, [3, [4]]]]));

///////////////////////////////////////////////////////////////////////
//4)Find Missing Number

function findMissingNumbers() {
  const arr = [1, 2, 3, 5, 6, 8];
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i] - 1) {
      result.push(arr[i] - 1);
    }
  }
  console.log(result);
}
// findMissingNumbers();

////////////////////////////////////////////////////////////
///5)Reverse Words in a Sentence
// "I love JS" → "JS love I"

function reverseString(str) {
  //   return str.split(' ').reverse().join(' ');
  let result = '';
  let word = '';
  for (let i = 0; i < str.length; i++) {
    word += str[i];
    if (str[i] == ' ' || i == str.length - 1) {
      result = word + ' ' + result;
      word = '';
    }
  }
  return result;
}
console.log(reverseString('I love JS'));
