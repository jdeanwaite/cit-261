function saveSimpleData(inputName) {
    var text = document.querySelector("input[name='" + inputName + "']").value;
    console.log("Saving " + inputName + ":", text);
    localStorage.setItem(inputName, text);
}

function saveArray(textAreaName) {
    var rawText = document.querySelector("textarea[name='" + textAreaName + "']").value;
    var array   = rawText.split(",");
    console.log("storing:", array);
    localStorage.setItem("array", JSON.stringify(array));
}

function saveAssociativeArray() {
    var testAssociativeArray = [];
    testAssociativeArray["book"] = "Harry Potter";
    testAssociativeArray["city"] = "London";
    console.log("storing:", testAssociativeArray);
    localStorage.setItem("testAssociativeArray", JSON.stringify(testAssociativeArray));
}

function saveObject() {
    var testObject = {
        hello: "World",
        count: 1
    };
    console.log("storing:", testObject);
    localStorage.setItem("testObject", JSON.stringify(testObject));
}

function loadStoredValues() {
    document.querySelector("input[name='textData']").value   = localStorage.getItem("textData");
    document.querySelector("input[name='numberData']").value = localStorage.getItem("numberData");

    if (localStorage.getItem("array")) {
        document.querySelector("textarea[name='arrayTextArea']").value = JSON.parse(localStorage.getItem("array")).join(',');
    }
}

loadStoredValues();

function createNewElement(color, append) {
    var newElement = document.createElement("div");
    newElement.className = "added-element " + color;
    var buttonElement = document.createElement('button');
    buttonElement.innerHTML = "Click Me to Remove!";
    buttonElement.setAttribute("onclick", "removeElement(this.parentElement)");
    newElement.appendChild(buttonElement);

    var containerDiv = document.getElementById("dynamic-element-container");
    if (append) {
        containerDiv.appendChild(newElement);
    }
    else
    {
        containerDiv.insertBefore(newElement, containerDiv.childNodes[0]);
    }
}

function removeElement(element) {
    element.parentElement.removeChild(element);
}

function setElementCSS(element, attribute, value) {
    console.log("setting style:", attribute + " : " + value);
    element.style[attribute] = value;
}
