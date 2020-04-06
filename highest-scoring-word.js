// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    let str, maxScore = 0
    
    for(let char of x.split(' ')){
        let score = 0
        for(let letter of char){
        score += alphabet.indexOf(letter) + 1
        }
        if(score > maxScore){
        str = char
        maxScore = score
        }
    }
    return str
}
console.log(high('man i need a taxi up to ubud'), 'taxi')
console.log(high('what time are we climbing up the volcano'), 'volcano')