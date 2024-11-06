{
    // problem - 2 : Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (array: number[]) => {
        const result: number[] = [];
        for (const number of array) {
            if (!result.includes(number)) {
                result.push(number);
            }
        }
        return result;
    };

    const uniqueNumbers = removeDuplicates([5, 6, 7, 5, 3, 5, 5, 3]);
    console.log(uniqueNumbers);
}
