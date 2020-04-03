// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
    let charMap = {}

    for(let element of A){
        charMap[element] = charMap[element] + 1 || 1
    }

    for(let num in charMap){
        if(charMap[num] % 2 === 1){
        return Number(num)
        }
    }
}
console.log(findOdd([1, 1, 2, 5, 5]))
console.log(findOdd([5, 6, 6]))