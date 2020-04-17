// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
    // (?=.*\d) checks if contains at least one any number
    // (?=.*[a-z]) checks if contains at least one lower case character
    // (?=.*[A-Z]) checks if contains at least one upper case charater
    // [?=.*a-zA-Z\d] checks if all together contains at least one number, one lower case and one upper case
    //{6,} checks for 6 character long minimum
    return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[?=.*a-zA-Z\d]{6,}$/).test(password);
}
console.log(validate('djI38D55'))
console.log(validate('123'))