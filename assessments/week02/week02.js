function printListFromText() {
    var text      = document.getElementById("loop-value-1").value;
    var direction = document.querySelector('input[name="loopDirection1"]:checked').value
    var array     = createArrayFromText(text, ",", direction);
    if (array && array.length) {
        var results = "";
        for (var index in array) {
            if (!array.hasOwnProperty(index))
                continue;
            results += array[index] + "\n";
        }
        document.getElementById("loop-results-1").value = results;
    }
}

function printListFromNumber() {
    var number = parseInt(document.querySelector('input[name="loopIterateNumber"]').value);
    var text   = document.querySelector('input[name="loopIterateText"]').value;
    if (!isNaN(number) && text) {
        var value = "";
        for (var i = 0; i < number; i++) {
            value += text + "\n";
        }
        document.getElementById("loop-results-2").value = value;
    }
}

function createArrayFromText(text, delimiter, direction) {
    if (!text) {
        return null;
    }
    if (direction == "forward") {
        return text.split(delimiter);
    }
    else {
        return text.split(delimiter).reverse();
    }
}

var favoriteThings = [];
function initMyFavoriteThings()
{
    favoriteThings["animal"] = "dog";
    favoriteThings["food"] = "ice cream";
    favoriteThings["state"] = "washington";
    favoriteThings["person"] = "my wife";
}

function showMyFavoriteThing()
{
    var name = document.querySelector('input[name="tableValue"]').value;
    if (name && favoriteThings.hasOwnProperty(name.toLowerCase()))
    {
        alert(favoriteThings[name.toLowerCase()]);
    }
    else
    {
        alert("Uh oh, that's not in this associative array.");
    }
}

initMyFavoriteThings();