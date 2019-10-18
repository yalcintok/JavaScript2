'use strict';
{
    const hackYourFutureMembers = [
        { name: 'Wouter', age: 33 },
        { name: 'Federico', age: 32 },
        { name: 'Noer', age: 27 },
        { name: 'Tjebbe', age: 22 },
      ];

    function getAges(myArray) {
        return myArray.age;
    };
    function sumAges (accumulator, currentValue){
        return accumulator + currentValue;
    };
    function calculateAges (myArray, callback) {
        let ages = myArray.map(getAges);
        return ages.reduce(callback);
    };
    
    console.log(calculateAges(hackYourFutureMembers, sumAges));
}