function parseJson() {
    var text = document.querySelector("textarea[name='jsonToParse']").value;
    try {
        var object = JSON.parse(text);
        alert("The string was a valid JSON string. Open the developer console to see the parsed object.");
        console.log("Object parsed:", object);
    }
    catch (e) {
        alert("The string is not a valid JSON string.");
    }
}

function stringifyObject() {
    var objectToStringify = {
        sample      : "data",
        myArray     : [1, 2, 3, 4],
        nestedObject: {
            "very-cool": "json"
        }
    };

    document.querySelector("textarea[name='jsonAfterStringified']").value = JSON.stringify(objectToStringify);
}

var httpRequest;

function fetchWeatherData() {
    var zipCode = document.querySelector("input[name='zipCode']").value;
    if (zipCode) {
        console.log("zipCode:", zipCode);
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            return;
        }
        httpRequest.onreadystatechange = parseWeatherData;
        httpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&appid=fe7f87daaa3ac305ee71e2ec8deb79ec');
        httpRequest.send();
    }
}

function parseWeatherData() {
    console.log("parsing");
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            try {
                var data = JSON.parse(httpRequest.responseText);
                console.log(data);
                console.log(data.weather[0].main);
                document.querySelector("#city-label").innerText            = data.name;
                document.querySelector("#current-weather-label").innerText = data.weather[0].main;
            }
            catch (e) {
                console.log(e);
                console.log(httpRequest.responseText);
                alert("The response was not valid JSON.");
            }
        } else {
            alert('There was a problem with the request.');
        }
    }
}