// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

// slice the array every 8 bytes
// push that slice from end to begining to a new array using unshift() will reverse the order
// iterate over the array of arrays and push it into a new array
// check if arrays in the array are empty of undefined


const dataReverse = data => {
    const bytes = [];
    for (let i = 0; i < data.length; i += 8) {
        bytes.unshift(...data.slice(i, i + 8));
    }
    return bytes;
};
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))
console.log(dataReverse([1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]))
console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]))

// brute force solution
// function dataReverse(data) {
//     let arr = []

//     for(let i = 0; i <= data.length; i+=8){
//         arr.unshift(data.slice(i, i+8))
//     }

//     let finalArr = []
//     for(let el= 0; el <= arr.length; el++){
//         if(arr[el] !== undefined && arr[el].length !== 0){
//             for(let num of arr[el]){
//                 finalArr.push(num)
//             }
//         }
//     } 
//     return finalArr
// }
