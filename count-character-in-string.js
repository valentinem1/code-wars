// The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count (string) {  
    // edge cases? lowercase? uppercase?
    // if string is empty string.length === 0 return {}
    // iterate over the string to create a hashmap with the key being the letter and the value the number of time the letter occurs
    let hashMap = {};
    
    if(string.toLowerCase().length === 0){
        return {};
    };
    let char;
    for(char of string){
        hashMap[char] = hashMap[char] + 1 || 1
    };
    return hashMap;
}
console.log(count('hello'))
console.log(count(''))