
//Calculator

// Set entries to an empty array. Each element represents a part of the numerical expression to be calculated
// Set temp to an empty string. This variable holds a partially entered number.

var entries = []
var temp = ''
var percentFlag = false
var zeroFlag = false

document.addEventListener('DOMContentLoaded', start)

function start () {  
    
  buttonEventListensers('number', processNumber)
  buttonEventListensers('ctrl', processCtrl)
  buttonEventListensers('percent',processPercent)
  buttonEventListensers('operator', processOperator)
  buttonEventListensers('equals', processEquals)

}

function buttonEventListensers(buttonClass,processFunction) {
  var buttons = document.getElementsByClassName(buttonClass)
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',processFunction)
  }  
}

// If the button is a number or a “.” then
// 	If percent = false then add the number to the temp string
// 	Else temp = number
// 	Show the number in the calculator display

function processNumber (evt) {
  if (!percentFlag) {
    zeroFlag ? processZero(evt) : temp += evt.target.innerText
  } else {
    temp = evt.target.innerText
    percentFlag = false
  }   

  display(temp)
  if (temp == "0") zeroFlag = true 
}

//Remove leading zeros i.e. if a user input a 0 and then a 2 just display 2 not (02)
function processZero (evt) {
  !(evt.target.innerText == ".") ?
    temp = evt.target.innerText :
    temp += evt.target.innerText     
  zeroFlag = false 
}

// If the button is “AC” then 
// 	Reset the entries to an empty array and temp to an empty string
// 	Clear the calculator display

// If the button is “CC” then 
// 	Reset temp to an empty string 
// 	(Retain the entries array - this is “stored” in the calculators memory)
// 	Clear the calculator display

function processCtrl (evt) {
  var ctrl = evt.target.innerText
  if (ctrl == "AC") {
    entries = []
    temp = ''
  } else temp = ''
  display(temp)
}

// If the button is a %
// 	temp = temp / 100
// 	Set percent = true 
// 	Show the number in the calculator display
 
function processPercent () {  
  temp = String(temp/100)
  display(temp)  
  percentFlag = true

}

// If the button is an operator (+, -, * or /) then
// 	Add temp to entries
// 	Add the operator (a "+", "-", "x", / button string) to entries
// 	Reset temp to an empty string

function processOperator(evt) { 
  var operator = evt.target.innerText
  entries.push(temp)
  entries.push(operator)
  temp = ''
}

// Else if the button is an equals then
// 	Add temp to entries 
// 	Set nt to the first element of entries (i = 0) and convert of a number
	
// 	Loop over all elements in entries starting from i = 1
// 		Set nextNum = entries element i + 1
// 		nt = nt (apply operator) nextNum (e.g. if operator = + then nt = nt + nextNum)
//      i = i + 1
	
// 	Show nt in the calculator display
// 	Reset the entries to an empty array and temp to an empty string

function processEquals() {
    
    entries.push(temp)
    var nt = Number(entries[0])

    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      nt = calculate(nt , nextNum, entries[i])
      i++
    }

    display(String(nt))
    entries = []
    temp = ''

}

function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+': return firstNumber + secondNumber
    case '-': return firstNumber - secondNumber
    case '\xD7': return firstNumber * secondNumber
    case '\xF7': return firstNumber / secondNumber
    } 
}

//Display output on calculator
function display(numberToDisplay) {
  var calculatorDisplay = document.getElementsByClassName('display')[0] 
  calculatorDisplay.innerHTML = numberToDisplay.substring(0,9)      
}