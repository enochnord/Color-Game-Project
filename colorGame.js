// declare variables
var numofSquares = 6;
var colors = generateColors(numofSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


// easy button
easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numofSquares = 3;
    colors = generateColors(numofSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});


// hard button
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numofSquares = 9;
    colors = generateColors(numofSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

// new colors button
resetButton.addEventListener("click", function() {
    // generate all new colors
    colors = generateColors(numofSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    // erase "correct" text when button is clicked
    messageDisplay.textContent = "";
    // change colors of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#423B49";
})

colorDisplay.textContent = pickedColor;

// manipulating the squares
for(var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.style.color = "green";
            messageDisplay.textContent = "Correct!!!";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#000000";
            messageDisplay.style.color = "red";
            messageDisplay.textContent = "Try Again!!!";
        }
    });
}


function changeColor(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors [random];
}

function generateColors(num) {
    // make an array
    var arr = []
    // repeat num times
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
        // get random color and push into arr
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
