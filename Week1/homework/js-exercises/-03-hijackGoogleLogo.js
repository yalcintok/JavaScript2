'use strict';

function hijackGoogleLogo () {
    var changeLogo = document.getElementById('logo-default');
    changeLogo.style.backgroundImage = "url(\"https://www.hackyourfuture.dk/static/logo-dark.svg\")";
};
hijackGoogleLogo();