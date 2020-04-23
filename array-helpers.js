// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// creates square helper method for array
    Array.prototype.square = function() {
    return this.map(el => el**2)
    }
// creates cube helper method for array
    Array.prototype.cube = function() {
    return this.map(el => el**3)
    }
// creates average helper method for array 
    Array.prototype.average = function() {
    if(this.length === 0){
        return NaN
    }
    return this.sum() / this.length;
    }
// creates sum helper method for array
    Array.prototype.sum = function() {
    return this.reduce((a, b) => a+b)
    }
// creates even helper method for array
    Array.prototype.even = function() {
    return this.filter(el => el%2 === 0)
    }
// creates odd helper method for array
    Array.prototype.odd = function() {
        return this.filter(el => el%2 === 1)
    }

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.square())
console.log(numbers.cube())
console.log(numbers.average())
console.log(numbers.sum())
console.log(numbers.even())
console.log(numbers.odd())