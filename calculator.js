/*FUNCTIONS PREPARATION*/

//Add function
function add(){
  var a= parseFloat(document.getElementById("firstNum").value);
  var b= parseFloat(document.getElementById("secondNum").value);
  var result= a+b;
  document.getElementById("result").innerHTML = result;
}

//Subtract function
function subtract(){
  var a= parseFloat(document.getElementById("firstNum").value);
  var b= parseFloat(document.getElementById("secondNum").value);
  var result= a-b;
  document.getElementById("result").innerHTML = result;
}

//Multiply function
function multiply(){
  var a= parseFloat(document.getElementById("firstNum").value);
  var b= parseFloat(document.getElementById("secondNum").value);
  var result= a*b;
  document.getElementById("result").innerHTML = result;
}

//Divide function
function divide(){
  var a= parseFloat(document.getElementById("firstNum").value);
  var b= parseFloat(document.getElementById("secondNum").value);
  var result= a/b;
  document.getElementById("result").innerHTML = result;
}

//Showing Sign functions
function writePlusSign(){
  document.getElementById("sign").innerHTML = "+";
}

function writeMinusSign(){
  document.getElementById("sign").innerHTML = "-";
}

function writeMulSign(){
  document.getElementById("sign").innerHTML = "x";
}

function writeDivSign(){
  document.getElementById("sign").innerHTML = "/";
}



/*CALCULATION STARTS*/
//This is add a sign after they clicking a function button
document.getElementById("add").addEventListener("click", writePlusSign);
document.getElementById("subtract").addEventListener("click", writeMinusSign);
document.getElementById("multiply").addEventListener("click", writeMulSign);
document.getElementById("divide").addEventListener("click", writeDivSign);

//This is calculate
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);


