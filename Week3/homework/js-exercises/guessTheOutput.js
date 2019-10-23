"use strict";
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// When we call x(), a gets reassigned to 12. So display an alert box with 12 and an OK button. The reassignment inside x() affects the global variable a. While it’s important to know what global scope is, it’s best practice to not define variables in the global scope.