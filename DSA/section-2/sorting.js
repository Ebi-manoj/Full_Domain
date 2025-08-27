function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
const arr = [1, 3, 6, 8, 2, 5, 4, 7];
//////////////////////////////////////////////////////
////Bubble Sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  console.log(arr);
}
// bubbleSort(arr);

/////////////////////////////////////////////////////////////
////SELECTION SORT
function selectionSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j <= i; j++) {
      if (arr[j] > arr[maxIndex]) maxIndex = j;
    }
    if (maxIndex != i) swap(arr, i, maxIndex);
  }
  console.log(arr);
}
// selectionSort(arr);
//////////////////////////////////////////////////////////////////////
/////Insertion sort

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (arr[j - 1] < arr[j]) break;
      swap(arr, j, j - 1);
    }
  }
  console.log(arr);
}

///////////////////////////////////////////////////
////Merge Sort

function mergeSort(arr, s, e) {
  if (e - s <= 1) {
    return;
  }

  let mid = Math.floor((s + e) / 2);
  mergeSort(arr, s, mid);
  mergeSort(arr, mid, e);

  merge(arr, s, mid, e);
}

function merge(arr, s, m, e) {
  const mix = [];
  let i = s;
  let j = m;

  while (i < m && j < e) {
    if (arr[i] < arr[j]) {
      mix.push(arr[i]);
      i++;
    } else {
      mix.push(arr[j]);
      j++;
    }
  }
  if (i < m) {
    mix.push(...arr.slice(i, m));
  }
  if (j < e) {
    mix.push(...arr.slice(j, e));
  }

  for (let k = 0; k < mix.length; k++) {
    arr[s + k] = mix[k];
  }
}

/////////////////////////////////////
////Quick sort

function quickSort(nums, low, high) {
  if (low >= high) return;

  let s = low;
  let e = high;
  let mid = Math.floor((s + e) / 2);
  let pivot = nums[mid];

  while (s <= e) {
    while (nums[s] < pivot) {
      s++;
    }

    while (nums[e] > pivot) {
      e--;
    }

    if (s <= e) {
      [nums[s], nums[e]] = [nums[e], nums[s]];
      s++;
      e--;
    }
  }

  quickSort(nums, low, e);
  quickSort(nums, s, high);
}
quickSort(arr, 0, arr.length - 1);
console.log(arr);
