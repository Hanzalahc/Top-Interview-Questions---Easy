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

// Q7 Intersection of Two Arrays II

/*

const intersect = function (nums1, nums2) {
  let data = {};

  let results = [];

  for (const element of nums1) {
    data[element] = (data[element] || 0) + 1;
  }

  for (const element of nums2) {
    if (data[element]) {
      results.push(element);
      data[element]--;
    }
  }
  return results;
};

*/

// Q8 Plus One

/*

only works for small numbers not large
const plusOne = function (digits) {
  let arrToStr = digits.join("");

  let strToNumber = parseInt(arrToStr) + 1;

  let numToStr = strToNumber.toString();

  return numToStr.split("");
};

const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
  }

  // when arr is like [9,9,9]
  digits.unshift(1);
  return digits;
};

*/

// Q9 Move Zeroes

/*

// good solution but not inplace and more operations and doesn't solve [0,0,1] case
const moveZeroes = function (nums) {
  if (nums.length === 1) {
    return nums;
  }

  const arrLength = nums.length;

  for (let i = 0; i < arrLength; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }

  return nums;
};

// optimized approch

const moveZeroes = function(nums) {
  let insertPos = 0;

  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

 
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

*/


// Q10 Two sum


/*

const twoSum = function (nums, target) {
  if (nums.length === 1) {
    return [0];
  }

  if (nums.length === 2) {
    return [0, 1];
  }

  let firstIndex = 0;  
  let secondIndex = 1; 

  while (firstIndex < nums.length) {
    if (nums[firstIndex] + nums[secondIndex] === target) {
      return [firstIndex, secondIndex];
    }

    if (secondIndex < nums.length - 1) {
      secondIndex++;
    } else {
      firstIndex++;
      secondIndex = firstIndex + 1;
    }
  }
};

*/