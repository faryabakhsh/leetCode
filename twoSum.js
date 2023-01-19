// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function (nums, target) {
  let map = new Map(); //initiating a hash map
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      // asking the map if it has num2
      return [i, map.get(num2)]; //we are returning an array with index of first number and index of num2
    }
    map.ser(num1, i); //if hash map havent seen num2
  }
};
