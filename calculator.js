
var entries = []
var temp = ''


document.addEventListener('DOMContentLoaded', start)

function start () {
    
  var items = document.getElementsByClassName('number')
  for (var i = 0; i < items.length; i++) {
    console.log("hello1")
    items[i].addEventListener('click',processNumber)
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
