"use strict";
const arrowUp = document.getElementById('up');
const arrowDown = document.getElementById('down');
const timeSelect = document.querySelector('.time-select');
const timeDisplay = document.getElementById('time-display');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

let seconds = 1500;
let running = false;
let timer;
function underTen(min) {
  if(min < 10) {
    return min = '0' + min;
  } else {
    return min;
  };
}; 
function showMinutes() {
  timeSelect.innerHTML = Math.floor(seconds / 60);
  let screenSeconds = seconds % 60;
  timeDisplay.innerHTML = underTen(Math.floor(seconds / 60)) + ':' + underTen(screenSeconds);
};
showMinutes();

function minutesUp() {
  if(running === false) {
    seconds += 300;
    showMinutes();
  } else {
    return seconds;
  };
  if (seconds >= 3300) {
    seconds = 3300; 
  };
};
function minutesDown() {
  if(running === false) {
    seconds -= 300;
    showMinutes();
  } else {
    return seconds;
  }
  if (seconds <= 0) {
    seconds = 0;
  }
};

function countDown() {
  timer = setInterval(() => {
    seconds--;
    showMinutes();
    if (seconds <= 0) {
      timeDisplay.innerHTML = 'Time\'s up';
      clearInterval(timer);
      running = false;
    };
  }, 1000)
};
function startCountDown() {
  if(running === false) {
    countDown();
    running = true;
  };
  
};
function pauseCountDown() {
  clearInterval(timer);
  running = false;
};
arrowUp.addEventListener('click', minutesUp);
arrowDown.addEventListener('click', minutesDown);
playButton.addEventListener('click', startCountDown);
pauseButton.addEventListener('click', pauseCountDown);

 