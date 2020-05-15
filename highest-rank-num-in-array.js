// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// create a hashMap to store the numbers in as key and number of repetition as value
// get the keys and check for the highest value
function highestRank(arr){
    let charMap = {};
    
    for(let char of arr){
        charMap[char] = charMap[char] +1 || 1
    }

    return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? parseInt(a) : parseInt(b))
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))
console.log(highestRank([10, 10, 3, 6, 7, 6]))
