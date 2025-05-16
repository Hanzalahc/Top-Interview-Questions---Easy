// Q1 Remove Duplicates from Sorted Array

/*

two pointer approch

const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

*/

// Q2 Best Time to Buy and Sell Stock II

/*

Greedy approch

const maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};


*/

// Q3 Rotate Array

/*

short brute force method but Time Limit Exceeded 

const rotate = function (nums, k) {
  if (nums.length === 0) return;

  k = k % nums.length;

  for (let i = 0; i < k; i++) {
    const last = nums.pop();
    nums.unshift(last);
  }
};


optimized method 

const rotate = function (nums, k) {
  k = k % nums.length;

  const end = nums.slice(-k);

  const start = nums.slice(0, nums.length - k);

  const rotated = end.concat(start);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotated[i];
  }
};



*/

// Q4 not from collection but from interview | pivot point

/*

const partitionArray = function (nums, pivot) {
  let smaller = [];
  let greater = [];

  for (const element of nums) {
    if (element < pivot) {
      smaller.push(element);
    } else {
      greater.push(element);
    }
  }

  return [...smaller, ...greater].sort((a, b) => a - b);
};

*/

// Q5 Contains Duplicate

/*

// brute force O(n^2)
const containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// Optimize

const containsDuplicate = function (nums) {
  let seen = new Set();

  for (const element of nums) {
    if (seen.has(element)) {
      return true;
    }

    seen.add(element);
  }
  return false;
};

*/

// Q6 Single Number

/*

const singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  let dataforNums = {};

  for (const element of nums) {
    dataforNums[element] = (dataforNums[element] || 0) + 1;
  }

  for (const element of nums) {
    if (dataforNums[element] === 1) {
      return element;
    }
  }
};


// optimal with O(1) space

const singleNumber = function (nums) {
 
  let result = 0

  for (const element of nums) {
    result ^= element
  }
  return element
};


*/

