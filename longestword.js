/* Instruction:
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:
findLongestWord(["hi", "hello"]);
// -> 
*/


function findLongestWord(arr) {
  let wordLength = 0
  for(let i = 0; i < arr.length; i++) {
    let currentWord = arr[i]
    if(currentWord.length > wordLength){
      wordLength = currentWord.length
    }
  }
  return wordLength
} 
console.log(findLongestWord(["hi", "hello", "cat", "Hack bright", "Good Morning", "Hannah is a Palindrome"]))

// Runtime Complexity: O(1) - Constant Time
// Space Complexity: O(n) - Linear Space



 
