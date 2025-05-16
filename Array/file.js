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


