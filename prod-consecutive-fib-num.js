// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

// [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(m) being the smallest one such as F(m) * F(m+1) > prod.
// productFib(714) # should return [21, 34, true]
// productFib(800) # should return [34, 55, false] 

function productFib(prod){
    let count1 = 0
    let count2 = 1

    // check if count1*count2 is smaller then prod until it is not anymore.
    while(count1*count2 < prod){
        // reassigned count2 to be count1+count2 which for the first iteration will return count2 = 1 and count1 = 1
        // this will increase the counts like fibonacci
        count2 = count1 + count2
        count1 = count2 - count1
    }
    return [count1, count2, count1*count2===prod]
}
console.log(productFib(714))
console.log(productFib(800))