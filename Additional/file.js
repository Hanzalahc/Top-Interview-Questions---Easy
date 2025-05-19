// additionall problems

// Maximum Subarray

/*

// kadance algo
const maxSubArray = function (nums) {
  let currentSum = 0;
  let maxSum = nums[0]

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    maxSum = Math.max(currentSum, maxSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  
  }
  return maxSum;
};

*/

// Two Sum II - Input Array Is Sorted

/*

const twoSum = function (numbers, target) {
  let startPos = 0;
  let endPos = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    let pairSum = numbers[startPos] + numbers[endPos];

    if (pairSum === target) {
      return [++startPos, ++endPos];
    }

    if (pairSum > target) {
      endPos--;
    }

    if (pairSum < target) {
      startPos++;
    }
  }
};

*/

// Majority Element

/*

// brute force but with linear time
const majorityElement = function (nums) {
  let majorityScore = Math.floor(nums.length / 2);

  let data = {};

  for (let i = 0; i < nums.length; i++) {
    data[nums[i]] = (data[nums[i]] || 0) + 1;
  }

  for (const element of nums) {
    if (data[element] > majorityScore) {
      return element;
    }
  }
};


// using mooree voting algo

const majorityElement = function(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
};

*/

// Pow(x, n)

/*

const myPow = function (x, n) {
  if (n === 0) return 1;

  let power = Math.abs(n);
  let res = 1;

  while (power > 0) {
    if (power % 2 === 1) {
      res *= x;
    }

    x *= x;

    power = Math.floor(power / 2);
  }
  return n < 0 ? 1 / res : res;
};


*/

// Container With Most Water

/*

const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    const width = right - left;

    const area = Math.min(leftHeight, rightHeight) * width;

    maxWater = Math.max(maxWater, area);

    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};


*/

// Product of Array Except Self

// linear time but not constant space

/*

const productExceptSelf = function (nums) {
  const prefix = [];
  const suffix = [];
  const answer = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      prefix.push(1);
    } else {
      prefix.push(nums[i - 1] * prefix[i - 1]);
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      suffix.push(1);
    } else {
      suffix.unshift(nums[i + 1] * suffix[0]);
    }
  }

  for (let i = 0; i < n; i++) {
    answer[i] = prefix[i] * suffix[i];
  }
  return answer;
};

// consta space

const productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n);

 
  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }


  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
};


*/

