// Q1 Reverse String

/*
const reverseString = function(s) {
    
   let startPointer = 0
   let endPointer = s.length-1
   
   while (startPointer < endPointer) {
       
       if (startPointer === endPointer){
           return
           }
       
       let temp = s[startPointer]
       s[startPointer] = s[endPointer]
       s[endPointer] = temp
       startPointer++
       endPointer--
       
       
   }
    
};
*/

// Q2  Reverse Integer

/*
const reverse = function (x) {
  let isNegative = x < 0;

  let intToStr = Math.abs(x).toString();

  let reversedStr = intToStr.split("").reverse().join("");

  let reversedNumber = parseInt(reversedStr);

  if (isNegative) {
    reversedNumber = -reversedNumber;
  }

  if (reversedNumber < -(2 ** 31) || reversedNumber > 2 ** 31 - 1) {
    return 0;
  }

  return reversedNumber;
};

*/

// Q3 First Unique Character in a String

/*
const firstUniqChar = function (stringToSolve) {
  let data = {};

  for (let i = 0; i < stringToSolve.length; i++) {
    let char = stringToSolve[i];

    data[char] = (data[char] || 0) + 1;
  }

  for (let i = 0; i < stringToSolve.length; i++) {
    let char = stringToSolve[i];
    if (data[char] === 1) {
      return i;
    }
  }

  return -1;
};
*/

// Q4 Valid Anagram

/*

stack method 

const isAnagram = function (s, t) {
  let dataForS = {};
  let dataForT = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    dataForS[char] = (dataForS[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i];

    dataForT[char] = (dataForT[char] || 0) + 1;
  }

  for (element of s) {
    if (dataForS[element] !== dataForT[element]) {
      return false;
    }
  }
  return true;
};

// map and reverse one

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let dataForS = new Map();
  let dataForT = new Map();

  for (const element of s) {
    dataForS.set(element, (dataForS.get(element) || 0) + 1);
  }

  for (const element of t) {
    dataForT.set(element, (dataForT.get(element) || 0) + 1);
  }

  for (const element of s) {
    if (dataForS.get(element) !== dataForT.get(element)) {
      return false;
    }
  }

  return true;

  // sol 2
  //   s = s.split("").sort().join("");
  //   t = t.split("").sort().join("");

  //   if (s === t) {
  //     return true;
  //   }

  //   return false;
};


*/

// Q5 Valid Palindrome

/*

const isPalindrome = function (s) {
  if (s === ("" || " ")) {
    return true;
  }

  let cleanedString = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();

  if (cleanedString.length === 1) {
    return true;
  }

  Runtime: 4 ms Your runtime beats 75.48 % of javascript submissions
  Memory Usage: 57.5 MB Your memory usage beats 65.79 % of javascript submissions.


    let arrStr = cleanedString.split("").reverse().join("");

    if (cleanedString === arrStr) {
      return true;
    }
    return false;

  Stack Base

    Runtime: 3 ms Your runtime beats 85.69 % of javascript submissions
  Memory Usage: 57.6 MB Your memory usage beats 63.04 % of javascript submissions.

  let stack = [];

  for (const element of cleanedString) {
    stack.push(element);
  }

  for (let i = 0; i < cleanedString.length; i++) {
    let returnedElement = stack.pop();
    if (returnedElement !== cleanedString[i]) {
      return false;
    }
  }

  return true;
};

*/

// Q6 String to Integer (atoi)

/*

const myAtoi = function (s) {
  // handle 0 length case
  if (s.length === 0) {
    return 0;
  }

  let data = [];
  let isNegative = false;

  for (let i = 0; i < s.length; i++) {
    let element = s[i];

    // handle leading whilespace case " "

    if (element === " " && data.length === 0 && !isNegative) {
      continue;
    }

    // handle first + or -

    if (
      (element === "+" || element === "-") &&
      data.length === 0 &&
      !isNegative
    ) {
      isNegative = element;
      continue;
    }

    // handle leading zero

    if (element === "0" && data.length === 0 && isNegative) {
      continue;
    }

    // handle push and break case

    if (element >= "0" && element <= "9") {
      data.push(element);
    } else {
      break;
    }
  }

  if (data.length === 0) {
    return 0;
  }

  let str = data.join("");

  let resNumber = parseInt(str);
  // handle negative sign case

  if (isNegative) {
    if (isNegative === "-") {
      resNumber = -resNumber;
    }
  }

  // handle Rounding case

  if (resNumber <= -(2 ** 31)) {
    return -(2 ** 31);
  }

  if (resNumber >= 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }

  return resNumber;
};

*/

// Q7 Implement strStr()

/*

const strStr = function (haystack, needle) {
  // handle needle 0 length case
  if (needle.length === 0) {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

*/

// Q8 Longest Common Prefix


/*

const longestCommonPrefix = function (strs) {
  // handle 0 length case

  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    let tempPrefix = "";
    let currentPrefix = strs[i];

    for (let j = 0; j < currentPrefix.length && j < prefix.length; j++) {
      if (currentPrefix[j] === prefix[j]) {
        tempPrefix += currentPrefix[j];
      } else {
        break;
      }
    }

    prefix = tempPrefix;
  }

  // handle 0 length prefix case

  if (prefix.length === 0) {
    return "";
  }

  return prefix;
};

*/


