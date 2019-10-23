"use strict";
function createBase(num) {
    function adding(num2){
        return num + num2;
    };
    return adding; 
  }
  
  const addSix = createBase(6);
  
  console.log(addSix(9));
  console.log(addSix(18));
  console.log(addSix(30));