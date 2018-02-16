
//Calculator

// Set entries to an empty array. Each element represents a part of the numerical expression to be calculated
// Set temp to an empty string. This variable holds a partially entered number.

var entries = []
var temp = ''
var percentFlag = false
var zeroFlag = false

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

  var percentButton = document.getElementsByClassName('percent')
  percentButton[0].addEventListener('click',processPercent) 

  var operatorButtons = document.getElementsByClassName('operator')
  for (var i = 0; i < operatorButtons.length; i++) {
    console.log("hello3")
    operatorButtons[i].addEventListener('click',processOperator)
  } 
  
  var equalsButton = document.getElementsByClassName('equals')
  equalsButton[0].addEventListener('click',processEquals) 

}

// If the button is a number or a “.” then
// 	If percent = false then add the number to the temp string
// 	Else temp = number
// 	Show the number in the calculator display

function processNumber (evt) {
  var calculatorDisplay = document.getElementsByClassName('display')[0]
  
  if (!percentFlag) {
    if (zeroFlag) {
      if (!(evt.target.innerText == ".")) {
        temp = evt.target.innerText
      } else {
        temp += evt.target.innerText    
      }  
      zeroFlag = false
    } else temp += evt.target.innerText
  } else {
    temp = evt.target.innerText
    percentFlag = false
  }   
  calculatorDisplay.innerHTML = temp.substring(0,9) 
  if (temp == "0") zeroFlag = true 
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

// Else if the button is a %
// 	temp = temp / 100
// 	Set percent = true 
// 	Show the number in the calculator display
 
function processPercent () {  
  var calculatorDisplay = document.getElementsByClassName('display')[0]
  temp = temp/100
  calculatorDisplay.innerHTML = temp.substring(0,8) 
  percentFlag = true
}

// Else if the button is an operator (+, -, * or /) then
// 	Add temp to entries
// 	Add the operator (a “+” or a “-“ button string) to entries
// 	Reset temp to an empty string

function processOperator(evt) {
  
  var operator = evt.target.innerText
  entries.push(temp)
  entries.push(operator)
  temp = ''
}

// Else if the button is an equals then
// 	Add temp to entries 
// 	Set to the first element of entries (i = 0) and convert of a number
	
// 	Loop over all elements in entries starting from i = 1
// 		Set nextNum = entries element i + 1
// 		nt = nt (apply operator) nextNum (e.g. if operator = + then nt = nt + nextNum)
//      i = i + 1
	
// 	Show nt in the calculator display
// 	Reset the entries to an empty array and temp to an empty string

function processEquals() {
    var calculatorDisplay = document.getElementsByClassName('display')[0]
    entries.push(temp)
    var nt = Number(entries[0])

    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      switch (entries[i]) {
        case '+': 
          nt += nextNum 
          break
        case '-': 
          nt -= nextNum
          break
        case '\xD7': 
          nt *= nextNum
          break
        case '\xF7': 
          nt /= nextNum
          break
        }
        i++
    }

    calculatorDisplay.innerHTML = String(nt).substring(0,8) 
    entries = []
    temp = ''

}