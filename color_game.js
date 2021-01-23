var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var result = document.querySelector(".result");
var button = document.querySelector("button");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i <=5; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			result.textContent = "Correct!";
			changeColors(clickedColor);
			document.querySelector("h1").style.background = pickedColor;
			button.textContent = "Try Again?";
		} else {
			result.textContent = "Incorrect!!!";
			this.style.background = "#232323";
			button.textContent = "Try Again?";
		}
	})
}

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
		squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	result.textContent = "";
	h1.style.background = "steelblue";
})

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
		squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
	}
	result.textContent = "";
	h1.style.background = "steelblue";
})

button.addEventListener("click", function(){
	button.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	change_color_squares(colors);
	result.textContent = "";
	h1.style.background = "steelblue";
});

function change_color_squares(colors){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
}

function changeColors(clickedColor){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = clickedColor;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * numSquares);
	return colors[random];
}

function generateRandomColors(n){
	var arr = [];
	for(var i=0; i<n; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}