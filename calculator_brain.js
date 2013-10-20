var firstNumber;
var operation;
var secondNumber;
var equals_clicked = false;


function onClickNumber(button){
	

	var buttonText = button.innerHTML;

	var display = document.getElementById('display');

	if (equals_clicked == true) display.value = '';

	equals_clicked = false;

	display.value = display.value + buttonText;

} 


function onClickOperation(button){
	var buttonText = button.innerHTML;

	var display = document.getElementById('display');
	
	firstNumber = display.value;
	operation = buttonText;

	display.value = '';

}

function onClickEquals(){	
	var display = document.getElementById('display');

	secondNumber = display.value;

	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);

	var answer;

	if (operation == '+'){
		answer = firstNumber + secondNumber;
	}
	else if (operation == "-"){
		answer = firstNumber - secondNumber;
	}
	else if (operation == "x"){
		answer = firstNumber * secondNumber;
	}
	else if (operation == "/"){
		answer = firstNumber / secondNumber;
	}
	else if (!operation){
		answer = display.value;
		alert('Please select operation first');
	}

	display.value = answer;

	equals_clicked = true;

	addToMemory(firstNumber,operation,secondNumber,answer);
}

function addToMemory(firstNumber, operation, secondNumber, answer){
	
	var memory = firstNumber + " " + operation + " " + secondNumber + " = " + answer + "<br/>";

	document.getElementById('memory').innerHTML =  memory;

}

function clearDisplay(){
	firstNumber = null;
	secondNumber = null;
	operation = null;
	answer = null;
	document.getElementById('display').value = '';
}

function clearHistory(){
	document.getElementById('memory').innerHTML = '<h4>Calculation History</h4>';
}
