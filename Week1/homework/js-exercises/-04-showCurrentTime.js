'use strict';

function addZero(i) {
    if(i < 10) {
        i = '0' + i;
    };
    return i;
};
function addTime () {
var newDate = new Date();
var getHour = addZero(newDate.getHours());
var getMinute = addZero(newDate.getMinutes());
var getSeconds = addZero(newDate.getSeconds());
var createPEl = document.createElement('p');
document.body.appendChild(createPEl);
createPEl.setAttribute('id', 'get-time');
document.getElementById('get-time').innerHTML = getHour + ':' + getMinute + ':' + getSeconds;
document.getElementById('get-time').style.textAlign = 'center';
};
let keepCurrent = setInterval(addTime);
addTime();
