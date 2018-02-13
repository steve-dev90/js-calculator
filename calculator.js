
var entries = []
var temp = ''


document.addEventListener('DOMContentLoaded', start)

function start () {
    
  var items = document.getElementsByClassName('number')
  for (var i = 0; i < items.length; i++) {
    console.log("hello1")
    items[i].addEventListener('click',calculate)
  }  

    
    
}

function calculate () {
  var calculatorDisplay = document.getElementsByClassName('display')[0]  
  calculatorDisplay.innerHTML = String(Math.random())
  console.log("hello")
}
