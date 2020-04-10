// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr){
    let currentSum = 0
    let num = 0

    // if the array is empty return 0
    if(arr.length === 0){
        return 0
    }
    
    // iterate over the arr
    arr.forEach((a, b) => {
        // assign the max value between element a of the array and the current sum + element a
        currentSum = Math.max(a, currentSum + a)
        // assign the max value betweem num and current sum
        num = Math.max(num, currentSum)
    })
    // return num which is the highest sum
    return num
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([-1, -4, -5]))
console.log(maxSequence([]))