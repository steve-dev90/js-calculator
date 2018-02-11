Calculator pseudocode

Set entries to an empty array. Each element represents a part of the numerical expression to be calculated

Set temp to an empty string. This variable holds a partially entered number.

Get the button clicked as a string 

If the button is a number or a “.” then
	If percent = false then add the number to the temp string
	Else temp = number
	Show the number in the calculator display

Else if the button is “AC” then 
	Reset the entries to an empty array and temp to an empty string
	Clear the calculator display

Else if the button is “CC” then 
	Reset temp to an empty string 
	(Retain the entries array - this is “stored” in the calculators memory)
	Clear the calculator display

Else if the button is a division or multiplication symbol then
	Add temp to entries (as a new array element)
	If the division button is pressed add a “/“ to entries 
	If the multiplication button is pressed add “*” to entries
	Reset temp to an empty string

Else if the button is + or a - then
	Add temp to entries
	Add the operator (a “+” or a “-“ button string) to entries
	Reset temp to an empty string

Else if the button is a %
	temp = temp / 100
	Set percent = true 

Else if the button is an equals then
	Add temp to entries 
	Set to the first element of entries (i = 0) and convert of a number
	
	Loop over all elements in entries starting from i = 1
		Set nextNum = entries element i + 1
		Set symbol to the operator (+, -, * and /)
		nt = nt (apply operator) nextNum (e.g. if operator = + then nt = nt + nextNum)
		
	//Display negative symbols correctly
	nt = absolute value of nt + ‘-‘
	
	Show nt in the calculator display
	Reset the entries to an empty array and temp to an empty string
