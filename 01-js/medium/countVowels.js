/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    a={'a':0, 'e':0, 'i':0, 'o':0, 'u':0}
    l=str.length;
    count=0;
    for (let i=0;i<l;i++){
      if (a.hasOwnProperty(str[i].toLowerCase())){
        count++;
      }
    }
    return count;
}

module.exports = countVowels;