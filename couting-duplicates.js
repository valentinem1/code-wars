// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


function duplicateCount(text){
    text = text.toLowerCase()
    let charMap = {}
    let count = 0

    for(let char of text){
        charMap[char] = charMap[char] + 1 || 1
    }

    for(let char in charMap){
        if(charMap[char] > 1){
            count++
        }
    }
    return count
}
console.log(duplicateCount("abcd"))
console.log(duplicateCount("aabbcde"))