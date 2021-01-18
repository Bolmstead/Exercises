/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let firstWord = words[0];
  if (firstWord === undefined){
    return 0
  }

  let secondWord = words[1];
  if (secondWord === undefined){
    return firstWord
  }

  if (firstWord.length > secondWord.length){
    words.splice(1,1)
    longest(words)
  }

  if (secondWord.length > firstWord.length){
    words.splice(0,1)
    longest(words)
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  console.log("str.length", str.length)
  if (str.length === 1) {
    return true
  }
  let splitStr = str.split('');

  if (splitStr[0] === splitStr[(splitStr.length - 1)]) {
    splitStr.splice((splitStr.length-1),1)
    splitStr.splice(0,1)
    let string = splitStr.join("")
    console.log(string)
    isPalindrome(string)
  }

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0){
  if (arr[0] === val){
    return idx
  } 
  else if ((arr[0] !== val) && arr.length !== 0) {
    arr.splice(0,1);
    idx +=1;
    return findIndex(arr, val, idx)
  } 
  else { 
    return -1
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
