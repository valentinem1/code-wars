// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
    // replace capital letter with a space and $1(group one) which is Camel
    return string.replace(/([A-Z])/g, ' $1')
}
console.log(solution("camelCasing"))