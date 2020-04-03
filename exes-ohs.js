// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let arrX = []
    let arrO = []
    
    for(let letter of str.toLowerCase()){
    if(letter === 'x'){
        arrX.push(letter)
    }else if(letter === 'o'){
        arrO.push(letter)
    }
    }
    
    if(arrX.length === arrO.length){
    return true
    }else{
    return false
    }
}
console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("zpzpzpp"))