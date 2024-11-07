"use strict";
{
    // Problem - 1 ---> Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    function sumArray(array) {
        return array.reduce((acc, curr) => acc + curr, 0);
    }
    const sum = sumArray([2, 4, 6, 8]);
    console.log(sum);
}
