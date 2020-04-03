// Complete the solution so that it reverses the string value passed into it.

// function reverse(str){
//     let reversed = ''
    
//     for(let char of str){
//         reversed = char + reversed
//     }
//     return reversed
// }

function reverse(str){
    return str.split('').reverse().join('')
}
console.log(reverse('hello'))

