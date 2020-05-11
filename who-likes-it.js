// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"



// check if the array is empty
// if yes print 'no one likes this'
// check if the array length is equal to one
// if yes print 'name likes this'
// check if the array is more than 1
// if yes join the array to make a string
// find the last two names and add 'and' in between
// check if the array if more than 4 names
// if yes print the first two names and count the rest of the names
function likes(names) {
    if(names.length === 0){
        return 'no one likes this'
    }else if(names.length === 1){
        return `${names[0]} likes this`
    }else if(names.length >= 4){
        return `${names.slice(0, 2).join(', ')} and ${names.slice(2).length} others like this`
    }

    return `${names.join(', ')} like this`.replace(/,(?=[^,]*$)/, ' and')
}
console.log(likes([]))
console.log(likes(["Peter"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))