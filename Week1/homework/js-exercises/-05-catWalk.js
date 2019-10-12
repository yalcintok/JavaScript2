'use strict';

let image = document.querySelector('img');
image.style.left = '0px';
function catWalk() {
    let moveDistance = 10;
    let moveLeft = parseInt(image.style.left);
    if (moveLeft < (document.body.clientWidth - image.width) / 2) {
        image.style.left = (moveLeft + moveDistance) + 'px';
    } else {
        window.clearInterval(keepWalk);
        image.src = 'https://media.tenor.com/images/b413d00f7c04ec226e2ffda388d322ae/tenor.gif';
        window.setTimeout(afterDance, 5000);
    }
};


function afterDance() {
    image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    keepWalk = window.setInterval(keepWalking, 50);
};
function keepWalking() {
    let moveLeft = parseInt(image.style.left);
    if (moveLeft > window.innerWidth) {
        window.clearInterval(keepWalk);
        image.style.left = '0px';
        keepWalk = window.setInterval(catWalk, 50);
      } else {
        moveLeft += 10;
        image.style.left = moveLeft + 'px';
      }
};

let keepWalk = setInterval(catWalk, 50);


