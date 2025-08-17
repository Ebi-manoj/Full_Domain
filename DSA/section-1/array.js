////////////////////////////////////
///Find thirdMax

function thirdMax() {
  const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8];
  let max = 0;
  let secmax = 0;
  let thirdMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      thirdMax = secmax;
      secmax = max;
      max = arr[i];
    } else if (arr[i] > secmax && arr[i] < max) {
      thirdMax = secmax;
      secmax = arr[i];
    } else if (arr[i] > thirdMax && arr[i] < secmax) {
      thirdMax = arr[i];
    }
  }
  return thirdMax;
}

////////////////////////////////////////////////////////////
///Roatate array by kth time

function rotateArraybyk(k) {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const size = arr.length;
  if (k > size) {
    k = k % size;
  }
  // const removed = arr.splice(size - k, k);
  // arr.unshift(...removed);
  reverse(arr, 0, size - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, size - 1);
  console.log(arr);

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
}

/////////////////////////////////
//remove duplicates from an array
function removeDuplicates() {
  const nums = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 6];
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      nums[++index] = nums[i];
    }
  }
  nums.length = index + 1;
  console.log(nums);
}
////////////////////////////////////////
///Max sub array (kadane's algorithm)

function maxSubArray() {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let sum = 0;
  let maxSum = nums[0];
  let si;
  let li;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < 0) {
      sum = 0;
      si = i + 1;
    }
    if (sum > maxSum) {
      maxSum = sum;
      li = i;
    }
  }
  console.log(maxSum, si, li);
}
maxSubArray();
