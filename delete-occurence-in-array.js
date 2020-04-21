// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].


function deleteNth(arr,n){
    let newArr = []
    for(let el of arr){
        //check if the count is smaller than n push the element to the array
        if(counts(newArr, el) < n){
            newArr.push(el)
        }
    }
    return newArr
}

//iterates over the empty array and check if the number already exist, if yes increase the count to know how many times it occurs
function counts(array, rep){
    let count = 0
    for(let el of array){
        if(el === rep){
        count++
        }
    }
    return count
}


console.log(deleteNth([1,2,3,1,2,1,2,3], 2))
console.log(deleteNth([20,37,20,21], 1))