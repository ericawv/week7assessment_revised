/* Instruction:
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:
hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False
*/

function uniqueChar(word) {
   
    for(let i = 0; i < word.length; i++) { 
      let currentCharacters = word[i] 

      if(word[i]  === word[i + 1]){
        return false 
      }
    }  
    return true          
} 
               
let hasUniqueChars = uniqueChar("Monday")
console.log(hasUniqueChars)

// Runtime Complexity: O(1) - Constant Time
// Space Complexity: O(1) - Constant Space



