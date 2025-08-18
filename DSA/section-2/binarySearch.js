////////////////////////////////////////
const nums = [1, 2, 3, 4, 5, 6];

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function binaryReccrusion(nums, s = 0, e, target) {
  if (s > e) {
    return -1;
  }

  let mid = Math.floor((s + e) / 2);
  if (nums[mid] == target) return mid;
  if (nums[mid] < target) {
    return binaryReccrusion(nums, mid + 1, e, target);
  } else {
    return binaryReccrusion(nums, s, mid - 1, target);
  }
}
console.log(binaryReccrusion(nums, 0, nums.length - 1, 5));
