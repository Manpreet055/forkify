//declare 3 variables in one statement
let firstName = "John", lastName = "Doe", age = 30;
//declacre 5 legal and 5 illegal variable names
// Legal variable names
var userName;
var _total;
var $price;
var Name;
var number1;
// Illegal variable names
// var 1stName;
// var first-name; 
// var first name;
// var @name; 
// var let; 

document.getElementById("heading").innerText = "Rules for Naming JS Variables";
document.getElementById("description").innerText = "Variable names can only contain , numbers, $, and _. For example: $my_1stVariable. \n Variables must begin with a letter, $ or _. For example: $name, _name or name. \n Variable names are case sensitive. \n Variable names should not be JS keywords.";

