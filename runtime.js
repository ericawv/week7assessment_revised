const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



/* How long does it take to double every number in a given 
 array? 

 Results for the extraLargeArray: insert 2.824644018 s, append 38.386659 ms
 Results for the tinyArray:       insert 101.72 μs,     append 279.628 μs
 Results for the smallArray:      insert 72.754 μs,     append 147.987 μs
 Results for the mediumArray:     insert 249.98 μs,     append 221.359 μs
 Results for the largeArray:      insert 15.491943 ms,  append 840.402 μs
 Results for the extraLargeArray: insert 2.205709381 s, append 5.36706 ms

 The runtime pattern shows that the larger the array does not necessarily mean that the function will run slower. The runtime is not just dependent on the size of the array, but there is also dependencies on the function executed. The doubleAppend function scales better when the array size goes from medium to extra larger.

 Additional analysis:
 For the insert (unshift()): The runtime performance diminished as the array size increased. Both the tinyArray and smallArray ran faster when the element was added to the front of the array and the new array length was returned. 
 
 For the append (push()): For majority of the larger arrays, the runtime performance showed to be faster when the element was added to the end of the arraay and the new array length was returned. With the push method and a larger array, the performace will be faster when each index does not need to be moved or unshifted to add the element. The doubleAppend function demonstrated that it is scableable as the array size increases.

 Extra Credit: 
 (References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift and 
              https://www.tutorialspoint.com/difference-between-push-and-unshift-methods-in-javascript)

 The slower function is slow because it uses the unshift method. The unshift method adds a new element to the beginning of an array and overwrites the original array. The unshift method contributes to a slower runtime, becuase this method requires unshifting each index element in the array when the new element is being added to the beginning of the array. This review supports why the runtime increased for the mediumArray, largeArray, and ExtraArray when the doublerInsert function was ran.
*/

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
