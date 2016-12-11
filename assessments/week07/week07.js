function onPageLoad() {
    alert("Welcome! You are seeing this message because the page loaded.");
}

function hideOnClick() {
    this.className += " fade-out";
}

function onFadeOutEnd() {
    console.log("end.");
    this.style.display = "none";
}

function createBalloon() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    console.log("w:", w, "h:", h);

    var balloon        = document.createElement('div');
    balloon.className  = "balloon";
    balloon.style.left = ((w / 2) - 25) + "px";
    balloon.style.top  = ((h / 2) - 25) + "px";
    balloon.ondrag     = handleDrag;
    balloon.setAttribute('draggable', 'true');
    balloon.addEventListener('touchmove', handleTouchMove);
    document.body.appendChild(balloon);
}

function handleDrag(event) {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate

    console.log("drag", x, y);

    if (x && y) {
        this.style.left = (x - 25) + "px";
        this.style.top  = (y - 25) + "px";
    }
}

function handleTouchMove(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    this.style.left = touch.clientX-25 + 'px';
    this.style.top = touch.clientY-25 + 'px';
    event.preventDefault();
}

function handleResize() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    console.log("w:", w, "h:", h);

    document.querySelector(".balloon").style.left = ((w / 2) - 25) + "px";
    document.querySelector(".balloon").style.top  = ((h / 2) - 25) + "px";
}

// window.onload = onPageLoad();

document.querySelector('#fade-out-on-click').onclick = hideOnClick;
document.querySelector('#fade-out-on-click').addEventListener('animationend', onFadeOutEnd);