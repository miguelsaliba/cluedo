function checkTextbox() {
    var user = document.getElementsByName('user')[0];
    var pass = document.getElementsByName('pass')[0];
    var repeat = document.getElementsByName('repeat')[0];
    var button = document.getElementsByTagName('button')[0];

    if (user.value != "" && pass.value != "") {
        if (document.getElementById('sign-in').checked || repeat.value == pass.value) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    } else {
        button.disabled = true;
        button.style.cursor = 'default';
    }
}

var radios = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', checkTextbox);
}
