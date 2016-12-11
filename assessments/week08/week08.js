var canvas         = document.getElementById("draw-canvas");
var context        = canvas.getContext("2d");
var ongoingTouches = [];

function initCanvas() {
    context.lineWidth = 2;
    setContextColor();

    canvas.addEventListener("touchstart", handleTouchStart, false);
    // canvas.addEventListener("touchend", handleEnd, false);
    // canvas.addEventListener("touchcancel", handleCancel, false);
    // canvas.addEventListener("touchmove", handleMove, false);
}

function handleTouchStart(e) {
    e.preventDefault();
    var touches = e["changedTouches"];

    for (var i = 0; i < touches.length; i++) {
        ongoingTouches.push(copyTouch(touches[i]));
        context.beginPath();
        context.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
        context.fill();
    }
}

function setContextColor() {
    context.fillStyle   = document.querySelector("#color-picker").value;
    context.strokeStyle = document.querySelector("#color-picker").value;
}

function copyTouch(touch) {
    return {
        identifier: touch.identifier,
        pageX     : touch.pageX,
        pageY     : touch.pageY
    };
}

initCanvas();