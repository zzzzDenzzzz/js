// color-block-1
let inputColor = document.getElementById("input-color");
let colorBlock_1 = document.getElementById("color-block-1");

inputColor.addEventListener("keydown", function(event) {
    if (!isValidChar(event.key) && event.key != "Backspace") {
        event.preventDefault();
    }
    else{
        inputColor.addEventListener("keyup", function() {
        colorBlock_1.style.backgroundColor = "#" + inputColor.value;
     });
    }
});

function isValidChar(char) {
    let regExp = /^[0-9A-Fa-f]$/;
    return regExp.test(char);
}

// color-block-2
let color_1 = document.querySelector("#color-1");
let color_2 = document.querySelector("#color-2");
let color_3 = document.querySelector("#color-3");
let color_4 = document.querySelector("#color-4");
let colorBlock_2 = document.getElementById("color-block-2");

color_1.addEventListener("change", function() {
    if (this.checked) {
        colorBlock_2.style.backgroundColor = "#fd12e6";
    }
});

color_2.addEventListener("change", function() {
    if (this.checked) {
        colorBlock_2.style.backgroundColor = "#345679";
    }
});

color_3.addEventListener("change", function() {
    if (this.checked) {
        colorBlock_2.style.backgroundColor = "#ff458d";
    }
});

color_4.addEventListener("change", function() {
    if (this.checked) {
        colorBlock_2.style.backgroundColor = "#5aa66f";
    }
});

// color-block-3
let redSlider  	= document.querySelector("#red-slider");
let greenSlider	= document.querySelector("#green-slider");
let blueSlider 	= document.querySelector("#blue-slider");
let colorBlock_3 	= document.querySelector("#color-block-3");

function setColor() {
    let redValue = redSlider.value;
    let greenValue = greenSlider.value;
    let blueValue = blueSlider.value;
    colorBlock_3.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
}

document.addEventListener("input", function(event) {
    if (event.target.matches("input[type='range']")) {
      setColor();
    }
});