'use strict';
{
    const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
    const filterLemons = fruitBasket.filter(selectLemons);
    function selectLemons(word) {
        return word.indexOf('Lemon');
    };
    console.log(`My mom bought me a fruit basket, containing ${filterLemons}`);
    
}
