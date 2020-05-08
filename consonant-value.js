// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// define an array with alphabet
// getting rid of consonant letters and replacing by an empty string
// map over the s string
// split by substr
// reduce substr by finding the letter in alphabet with indexOf()
// find the highest number substr reduced to find the highest value

function solve(s) {
    let abc = Array.from('abcdefghijklmnopqrstuvwxyz');
    s = s.replace(/[aeiou]/gi, ' ').split(' ');

    let result = s.map(el => el.split('').reduce((a, b) => a + abc.indexOf(b)+1, 0))

    return Math.max(...result)
};
console.log(solve("zodiac"),26)
console.log(solve("chruschtschov"),80)
console.log(solve("twelfthstreet"),103)