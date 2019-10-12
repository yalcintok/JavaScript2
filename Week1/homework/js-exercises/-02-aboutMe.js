'use strict';

document.body.style.fontFamily = 'Arial, sans-serif';
var nickName = document.getElementById('nickname');
nickName.textContent = 'Enes';
var favoriteFood = document.getElementById('fav-food');
favoriteFood.textContent = 'Lahmacun';
var hometown = document.getElementById('hometown');
hometown.textContent = 'Turkiye';

//////////////////////////////////////////////////

var getList = document.querySelectorAll('ul li');
for (let i = 0; i < getList.length; ++i) {
    getList[i].className = 'list-item';
};

/////////////////////////////////////////////////
var createImg = document.createElement('img');
createImg.src = 'https://pbs.twimg.com/profile_images/1155938771491282944/sW_hQQIO_400x400.jpg';
document.body.appendChild(createImg);