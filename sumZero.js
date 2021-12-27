/* Instruction:
Write a function that takes in an array of numbers. 
The function should return True if any two numbers in the list sum to 0, and false otherwise.

For example:
addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True
*/

let array = [1, 2, 3, 4, 5, -1]

function sumZero(arr) {
//    console.log(arr)
    for(let i = 0; 1 < arr.length; i++) {
        let currentIndex = arr[i]

    for(let j = i + 1; j < arr.length; j++) {
        let comparisonIndex = arr[j]
        if(currentIndex + comparisonIndex === 0) {
            return true
        }
    }    
    return false  
}

}
console.log(sumZero(array))

 // Runtime Complexity: O(n) - Linear Time   
 // Space Complexity:   O(1) - Constant Space
 

 