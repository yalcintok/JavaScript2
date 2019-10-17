'use strict';
{
      const myNumbers = [1, 2, 3, 4];
      const myNewNumbers = myNumbers.map(doubleEvenNumbers);
      function doubleEvenNumbers(num) {
          if (num % 2 === 0) {
            return num * 2; 
          };
        return num;
      };
      console.log(myNewNumbers);
      const theLastCondition = myNewNumbers.filter(filterFunc);
      function filterFunc(num2){
        if (num2 % 2 === 0) {
            return true;
        };
      };
      console.log(theLastCondition);    
}