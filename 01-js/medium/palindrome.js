/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  q=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(q)
  l=0;
  r=q.length-1;
  while(l<r){
    if(q[r]!=q[l]){

      return false;
      
    }
    else{
      l++;
      r--;
    }
  }
  return true;
}
isPalindrome(('Able, was I ere I saw Elba!'))
module.exports = isPalindrome;
