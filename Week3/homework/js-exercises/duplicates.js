"use strict";
function removeDuplicates() {
    const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
    let remove = (letters) => letters.filter((v,i) => letters.indexOf(v) === i)
    console.log(remove(letters));
};
removeDuplicates();

//We can do that with other way. Like this;

function removeDuplicates() {
    const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
    let unique = [...new Set(letters)];
    console.log(unique);
};
removeDuplicates();