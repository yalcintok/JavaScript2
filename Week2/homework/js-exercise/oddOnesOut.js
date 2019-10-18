'use strict';
{
      // const myNumbers = [1, 2, 3, 4];
      // const myNewNumbers = myNumbers.map(doubleEvenNumbers);
      // function doubleEvenNumbers(num) {
      //     if (num % 2 === 0) {
      //       return num * 2; 
      //     };
      //   return num;
      // };
      // console.log(myNewNumbers);
      // const evenNumbers = myNewNumbers.filter(getEvenNumbers);
      // function getEvenNumbers(num2){
      //   if (num2 % 2 === 0) {
      //       return true;
      //   };
      // };
      // console.log(evenNumbers);    

      function getOutOddsNumber (num) {
        if(num % 2 === 0) {
          return true;
        };
      };

      function multiplyEvenNumbers (evenNum) {
        return evenNum * 2;
      };

      const numbers = [1, 2, 3, 4, 5, 6];

      console.log(numbers.filter(getOutOddsNumber).map(multiplyEvenNumbers));
}