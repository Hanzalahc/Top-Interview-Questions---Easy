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



*/

// Runtime: 2 ms Your runtime beats 52.73 % of javascript submissions.
// Memory Usage: 56.3 MB Your memory usage beats 68.69 % of javascript submissions.
// const myAtoi = function (s) {
//   if (s.length === 0) {
//     return 0;
//   }

//   let dataForStr = [];
//   let isNegavtive = false;

//   for (const element of s) {
//     if (element === " " && dataForStr.length === 0 && !isNegavtive) {
//       continue;
//     }

//     if (
//       (element === "+" || element === "-") &&
//       !isNegavtive &&
//       dataForStr.length === 0
//     ) {
//       isNegavtive = element;
//          continue;
//     }

//     if (element === "0" && dataForStr.length === 0 && isNegavtive) {
//       continue;
//     }

//     if (element >= "0" && element <= "9") {
//       dataForStr.push(element);
//     } else {
//       break;
//     }
//   }

//     if (dataForStr.length === 0) {
//     return 0
//   }

//   let strToInteger = parseInt(dataForStr.join(""));

//   if (isNegavtive) {
//     if (isNegavtive === "-") {
//       strToInteger = -strToInteger;
//     }
//   }

//   if (strToInteger < -(2 ** 31)) {
//     return -(2 ** 31);
//   }

//   if (strToInteger > 2 ** 31 - 1) {
//     return 2 ** 31 - 1;
//   }

//   return strToInteger;
// };

const myAtoi = function (s) {};

// console.log(myAtoi("+-12"));

// const strStr = function (haystack, needle) {
//   if (needle.length === 0) {
//     return 0;
//   }

//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     if (haystack.slice(i, i + needle.length) === needle) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(strStr("sadbutsad", "sad"));

// const longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";

//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     let currentStr = strs[i];
//     let tempPrefix = "";

//     for (let j = 0; j < prefix.length && j < currentStr.length; j++) {
//       if (prefix[j] === currentStr[j]) {
//         tempPrefix += prefix[j];
//       } else {
//         break;
//       }
//     }

//     prefix = tempPrefix;

//     if (prefix === "") {
//       return "";
//     }
//   }

//   return prefix;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// Q1

// var reverseString = function (s) {
//   if (s.length === 1) {
//     return s;
//   }

//   return s.reverse();
// };

// console.log(reverseString(["h", "e", "l", "l", "o"]));

// Q2

// var reverse = function (x) {
//   let isNegative = x < 0;

//   let numToStr = Math.abs(x).toString();

//   let reversedStr = numToStr.split("").reverse().join("");

//   let strToInteger = parseInt(reversedStr);

//   if (isNegative) {
//     strToInteger = -strToInteger;
//   }

//   return strToInteger;
// };

// console.log(reverse(-123));

// Q3

// const firstUniqChar = function (stringToSolve) {
//   let dataForStr = {};

//   for (const element of stringToSolve) {
//     if (dataForStr[element]) {
//       dataForStr[element] = (dataForStr[element] || 0) + 1;
//     } else {
//       dataForStr[element] = 1;
//     }
//   }

//   for (let i = 0; i < stringToSolve.length; i++) {
//     if (dataForStr[stringToSolve[i]] && dataForStr[stringToSolve[i]] === 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(firstUniqChar("loveleetcode"));

//Q4
// const isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let dataForS = new Map();
//   let dataForT = new Map();

//   for (const element of s) {
//     dataForS.set(element, (dataForS.get(element) || 0) + 1);
//   }

//   for (const element of t) {
//     dataForT.set(element, (dataForT.get(element) || 0) + 1);
//   }

//   for (const element of s) {
//     if (dataForS.get(element) !== dataForT.get(element)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isAnagram("anagram", "nagaram"));

// Q5
// var isPalindrome = function (s) {
//   if (s === ("" || " ")) {
//     return true;
//   }

//   let cleanedString = s
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]/gi, "");

//   if (cleanedString.length === 1) {
//     return true;
//   }

//   let reversedStr = cleanedString.split("").reverse().join("");

//   if (reversedStr !== cleanedString) {
//     return false;
//   }
//   return true;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

//Q6

// const myAtoi = function (s) {
//   if (s.length === 0) {
//     return 0;
//   }

//   let dataForStr = [];
//   let isNegavtive = false;

//   for (const element of s) {
//     if (element === " " && dataForStr.length === 0 && !isNegavtive) {
//       continue;
//     }

//     if (
//       (element === "+" || element === "-") &&
//       !isNegavtive &&
//       dataForStr.length === 0
//     ) {
//       isNegavtive = element;
//       continue;
//     }

//     if (element === "0" && dataForStr.length === 0 && isNegavtive) {
//       continue;
//     }

//     if (element >= "0" && element <= "9") {
//       dataForStr.push(element);
//     } else {
//       break;
//     }
//   }

//   if (dataForStr.length === 0) {
//     return 0;
//   }

//   let strToInteger = parseInt(dataForStr.join(""));

//   if (isNegavtive) {
//     if (isNegavtive === "-") {
//       strToInteger = -strToInteger;
//     }
//   }

//   if (strToInteger < -(2 ** 31)) {
//     return -(2 ** 31);
//   }

//   if (strToInteger > 2 ** 31 - 1) {
//     return 2 ** 31 - 1;
//   }

//   return strToInteger;
// };

// console.log(myAtoi("words and 987"));

// Q7

// const strStr = function (haystack, needle) {
//   if (needle.length === 0) {
//     return 0;
//   }

//   for (let i = 0; i < haystack.length - needle.length; i++) {
//     if (haystack.slice(i, i + needle.length) === needle) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(strStr("sadbutsad", "sad"));

// Q8

// const longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";

//   let prefix = strs[0];

//   for (let i = 0; i < strs.length; i++) {
//     let tempPrefix = "";
//     let currentPrefix = strs[i];

//     for (let j = 0; j < currentPrefix.length; j++) {
//       if (currentPrefix[j] === prefix[j]) {
//         tempPrefix += currentPrefix[j];
//       } else {
//         break;
//       }
//     }

//     prefix = tempPrefix;
//   }

//   if (prefix.length === 0) {
//     return "";
//   }

//   return prefix;
// };

// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

const reverseString = function (s) {
  let startPointer = 0;
  let endPointer = s.length - 1;

  for (let i = 0; i < s.length; i++) {
    if (startPointer === endPointer) {
      return;
    }

    let temp = s[startPointer];
    s[startPointer] = s[endPointer];
    s[endPointer] = temp;
    startPointer++;
    endPointer--;
  }
};
