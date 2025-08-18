///////////////////////////////////
///Print n to 1

function print1(n) {
  if (n == 0) return;
  print1(n - 1);
  console.log(n);
}

///////////////////////////////////
///Find sum of sumber till

function sumofTill(n) {
  if (n == 0) return 0;

  return n + sumofTill(n - 1);
}

///////////////////////////////////////////
//sum of digits

function sumOfDigits(num, sum = 0) {
  if (num == 0) return 0;
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

////////////////////////////////
//Reverse a number
function reverseNumber(num, rev = 0) {
  if (num == 0) return rev;
  return reverseNumber(Math.floor(num / 10), rev * 10 + (num % 10));
}

///////////////////////////////////////
//Palindrome or not
function palindrome(str) {
  return helper(str, 0, str.length - 1);

  function helper(str, s, e) {
    if (s == e) return true;
    if (str[s] !== str[e]) return false;
    return helper(str, s + 1, e - 1);
  }
}

///////////////////////////////////////////
///Check if array is sorted or not
function checkSort(arr) {
  return helper(0);
  function helper(n) {
    if (n == arr.length - 1) return true;
    if (arr[n + 1] < arr[n]) return false;
    return helper(n + 1);
  }
}

////////////////////////////////////////////
///Fibboniici

function fibonnici(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonnici(n - 1, memo) + fibonnici(n - 2, memo);
  return memo[n];
}

console.log(fibonnici(50));
