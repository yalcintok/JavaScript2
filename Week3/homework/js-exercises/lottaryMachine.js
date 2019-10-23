"use strict";
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    for(let i = startIndex; i < (stopIndex + 1); ++i) {
        numbers.push(i);
    };

    numbers.filter(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log(`The number is divisible at the same time by 3 and 5`);
        }else if(num % 3 === 0) {
            threeCallback();
        } else if (num % 5 === 0) {
            fiveCallback();
        } else {
            console.log(num);
        }
    })
};
function sayThree(){
    console.log("The number is divisible by 3");
};
function sayFive(){
    console.log("The number is divisible by 5");
};
  
threeFive(15, 30, sayThree, sayFive);

 