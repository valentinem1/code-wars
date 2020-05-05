// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

//edge cases 
//  if a number is whole like 5 or 9
//  if a float number as many number after '.' we need to check the 
// first number after '.' and not the one completely at the end as a number can be 4.4999999
//  check if number % 1 doesn't equal 0 tells us if a number is a float or not

Math.round = function(number) {
    let arrNum = number.toString().split('')

    if(arrNum[arrNum.indexOf('.')+1] >= 5 && arrNum[arrNum.indexOf('.')]){
        return parseInt(number+1)
    }else{
        return parseInt(number)
    }
};
console.log(Math.round(5), 5)
console.log(Math.round(4.9999), 5)

Math.ceil = function(number) {
    if(number % 1 !== 0){
        return parseInt(number+1)
    }return number
};
console.log(Math.ceil(0.4), 1)
console.log(Math.ceil(2.6), 3)

Math.floor = function(number) {
    if(number % 1 !== 0){
        return parseInt(number)
    } return number
};
console.log(Math.floor(3.3), 3)
console.log(Math.floor(2), 2)