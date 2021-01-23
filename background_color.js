var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");

function changeGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ input1.value
	+ ", " 
	+ input2.value 
	+ ")";

	 h3.textContent = body.style.background + ";";
}

input1.addEventListener("input", changeGradient);
input2.addEventListener("input", changeGradient);
