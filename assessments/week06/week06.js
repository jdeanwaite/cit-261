function changeToBlue(element, btn) {
    element.style.backgroundColor = 'blue';
    btn.setAttribute("disabled", "disabled");
}

function moveLeft(element, btn) {
    element.style.left = '100px';
    btn.setAttribute("disabled", "disabled");
}

function startSpin(element, btn) {
    element.className += " spin";
    btn.innerHTML = "Stop!";
    btn.setAttribute("onclick", "stopSpin(this.parentElement, this)");
}

function stopSpin(element, btn) {
    element.className = element.className.replace(" spin", "");
    btn.innerHTML = "Spin!";
    btn.setAttribute("onclick", "startSpin(this.parentElement, this)");
}