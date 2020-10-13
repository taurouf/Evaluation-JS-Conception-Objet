'use strict'

var str = prompt('Entrer votre mots ou phrases pour voir si c\'est un palindrome');
var isPalindrome = function (inStr) {
  inStr = inStr.replace(/\W/g, '');
  inStr = inStr.toLowerCase();
  for (var i = 0; i < inStr.length; i++) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(str));