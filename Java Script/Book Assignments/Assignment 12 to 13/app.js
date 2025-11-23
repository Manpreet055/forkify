var input; 
do {
    input = prompt("Enter any one Character:");
}
while (input.length !== 1 || !isNaN(input)); // Ensure input is a single character and not a number

var charCode = input.charCodeAt(0);

if (charCode >= 65 && charCode <= 90) {
    alert("Uppercase Letter");
}
else if (charCode >= 97 && charCode <= 122) {
    alert("Lowercase Letter");
}
else if (charCode >= 48 && charCode <= 57) {
    alert("Digit");
}
else {
    alert("Special Character");
}


var firstNum = parseFloat(prompt("Enter first number:"));
var secondNum = parseFloat(prompt("Enter second number:"));
if (firstNum > secondNum) {
    alert(`${firstNum} is greater than ${secondNum}`);
}
else if (firstNum < secondNum) {
    alert(`${secondNum} is greater than ${firstNum}`);
}
else {
    alert(`${firstNum} is equal to ${secondNum}`);
}



var num = parseFloat(prompt("Enter a number:"));
if (num > 0) {
    alert("Positive Number");
}
else if (num < 0) {
    alert("Negative Number");
}
else {
    alert("Zero");
}


var character;
do {
    character = prompt("Enter a single character:");
  } 
while (character.length !== 1 || !isNaN(character));

if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||
           character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
    alert("Vowel");
}
else {
    alert("Consonant");
}


var correctPassword = "Saylani123";

var userPassword = prompt("Enter your password:");
if (!userPassword) {
    alert("Please enter your password");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} 
else {
    alert("Incorrect password");
}


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
console.log(greeting);


var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));
if (time >= 0 && time < 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}