
//Calculator

// Set entries to an empty array. Each element represents a part of the numerical expression to be calculated
// Set temp to an empty string. This variable holds a partially entered number.

var entries = []
var temp = ''

document.addEventListener('DOMContentLoaded', start)

function start () {
    
  var numberButtons = document.getElementsByClassName('number')
  for (var i = 0; i < numberButtons.length; i++) {
    console.log("hello1")
    numberButtons[i].addEventListener('click',processNumber)
  }  

  var ctrlButtons = document.getElementsByClassName('ctrl')
  for (var i = 0; i < ctrlButtons.length; i++) {
    console.log("hello2")
    ctrlButtons[i].addEventListener('click',processCtrl)
  }  


}

// If the button is a number or a “.” then
// 	If percent = false then add the number to the temp string
// 	Else temp = number
// 	Show the number in the calculator display

function processNumber (evt) {
  var calculatorDisplay = document.getElementsByClassName('display')[0]
  temp += evt.target.innerText    
  calculatorDisplay.innerHTML = temp
  
}

// Else if the button is “AC” then 
// 	Reset the entries to an empty array and temp to an empty string
// 	Clear the calculator display

// Else if the button is “CC” then 
// 	Reset temp to an empty string 
// 	(Retain the entries array - this is “stored” in the calculators memory)
// 	Clear the calculator display

function processCtrl (evt) {
  var calculatorDisplay = document.getElementsByClassName('display')[0] 
  var ctrl = evt.target.innerText
  if (ctrl = "AC") {
    entries = []
    temp = ''
  } else temp = ''
  calculatorDisplay.innerHTML = temp
}

