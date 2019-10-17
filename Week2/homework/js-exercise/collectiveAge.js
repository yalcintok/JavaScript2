'use strict';
{
    const hackYourFutureMembers = [
        { name: 'Wouter', age: 33 },
        { name: 'Federico', age: 32 },
        { name: 'Noer', age: 27 },
        { name: 'Tjebbe', age: 22 },
      ];

    function getAges(obj) {
        return obj.age;
    };
    function sumAges (accumulator, currentValue){
        return accumulator + currentValue;
    };
    function calculateAges (obj, callback) {
        let ages = obj.map(getAges);
        return ages.reduce(callback);
    };
    
    console.log(calculateAges(hackYourFutureMembers, sumAges));
}