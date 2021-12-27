/* Instruction:
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:
isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False
*/


function isPangram(string) {
  let strArr = string.toLowerCase()
  console.log(strArr)

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false
    }     
  }
  return true
}

let pangram = isPangram("The quick brown fox jumps over the lazy dog!");
console.log(pangram)

// Runtime Complexity: O(1) - Constant Time
// Space Complexity: O(n) - Linear Space


