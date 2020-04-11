// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    let oddArr = []
    
    for(let el of array){
        if(el%2 === 1){
            array.splice(array.indexOf(el), 1, null)
            oddArr.push(el)
        } 
    }

    oddArr = oddArr.sort((a, b) => a - b)

    for(let char of oddArr){
        array.splice(array.indexOf(null), 1, char)
    }
    return array
}
console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))
console.log(sortArray([]))