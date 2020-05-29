// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.


var sum_pairs=function(ints, s){
    let sumArr = [];

    for(let i = 0; i < ints.length; i++){
        for(let j = i+1; j < ints.length; j++){
            if(ints[i] + ints[j] === s){
                sumArr.push([ints[i], ints[j]]);
            };
        };
    };
    return sumArr[0]
};
console.log(sum_pairs([11, 3, 7, 5], 10));
console.log(sum_pairs([4, 3, 2, 3, 4], 6));
console.log(sum_pairs([0, 0, -2, 3], 2))