"use strict";
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

//In the first console.log() we will get as a result 9. This means that it is being passed by value because when you pass by value it will make a copy and If you changed inside the outside would not get reflected. Passing by value means that the value of the function parameter is copied into another location of your memory, and when accessing or modifying the variable within your function, only the copy is accessed/modified and the original value is left untouched.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

//In the second console.log() we will get as a result {x: 10}. When you assign a value to a variable it actually holds the address of where this is stored. It is being passed by reference and that is why when we mutated, also is reflected in y. Passing by reference means that the memory address of the variable (a pointer to the memory location) is passed to the function. This is unlike passing by value, where the value of a variable is passed on.

