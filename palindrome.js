//Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true

// If the number is negative, return false, else proceed to #2.
// Store the given number x in a variable number. We are doing it because we will perform our operations on number and due to that, it’s value will change. We will use x at the end of the program to compare with the reversed number.
// Reverse the number (Just like LeetCode #7 - Reverse Integer).
// Return true if the reverse number and given number are equal, false otherwise.

// Time Complexity
// Since we are going through the entire number digit by digit, the time complexity should be O(log10n). The reason behind log10 is because we are dealing with integers which are base 10.

// Space Complexity
// We are not using any data structure for interim operations, therefore, the space complexity is O(1).

var isPalindrome = function (x) {
  // Base condition
  if (x < 0) {
    return false;
  }
  // Store the number in a variable
  let number = x;
  // This will store the reverse of the number
  let reverse = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return x === reverse;
};
