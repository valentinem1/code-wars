// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// iterate over the array of hashes
// iterate over hashes to get the values
// create an empty string
// push name in the empty string
// join the array with ','
// replace the last ',' with '&'

function list(names){
    let newArr = []
    for(let char of names){
        for(let el in char){
        newArr.push(char[el])
        }
    }
    let string = newArr.join(', ')

    string = string.replace(/,(?=[^,]*$)/, ' &')
    return string
}
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]), 'Bart, Lisa & Maggie')
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]), 'Bart & Lisa')
console.log(list([]), '')