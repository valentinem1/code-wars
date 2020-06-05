// given an array of integer return only the prime numbers

function isPrime(arr){
    // assuming all numbers are whole and positive numbers
    // create a new array to hold the prime numbers
    // loops through the array of numbers/
    // first check if the number is bigger than 1 as one isn't a prime number
    // check if the number equals 2 as 2 is the only prime number divisible by 2
    // and check if the number divided by 2 is a float number
    // non prime numbers while return a whole number when divided by 2
    // if the number passes these checks it is a prime number and push it to the new array!
    // let newArr = [];
    
    // for(let num of arr){
    //     if(num > 1){
    //         if(num === 2 || (num / 2) % 1 !== 0){
    //         newArr.push(num);
    //         };
    //     };
    // }
    // return newArr;

    // the filter method will return the same array with only the prime members
    // it avoids creating a new array
    return arr.filter(num => {
        if(num > 1){
            if(num === 2 || (num / 2) % 1 !==0){
                return num;
            }
        }
    })
}
console.log(isPrime([1, 2, 3, 4, 5, 6, 7, 11, 76, 48]));