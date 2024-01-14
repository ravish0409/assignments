/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    m= Number.MIN_SAFE_INTEGER;
    l=numbers.length
    if(l===0){
        return undefined;
    }
    for (let i=0;i<l;i++){
        if(numbers[i]>m){
            m=numbers[i];
        }
    }
    return m;
}

module.exports = findLargestElement;