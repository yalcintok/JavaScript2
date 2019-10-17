'use strict';
{
    const myHobbies = [
        'Meditation',
        'Reading',
        'Programming',
        'Hanging out with friends',
        'Going to the gym',
      ];

    let unorderedList = document.createElement('ul');
    document.body.appendChild(unorderedList);

    let hobbies =  myHobbies.forEach(seperateHobbs);
    function seperateHobbs(item) {
        let listELs = document.createElement('li');
        listELs.innerHTML = item;
        unorderedList.appendChild(listELs);
    };
    console.log(hobbies);
    
}