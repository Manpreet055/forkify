
var city = prompt("Enter your city name:");
if (city === "Karachi") {
    alert("Welcome to City of Lights");
}

var gender = prompt("Please enter your gender:")
if (gender=== "male") {
    alert("Good Morning Sir");
}
if (gender=== "female") {
    alert("Good Morning Ma'am");
}

var color = prompt("Please Enter Color of Road Traffic Signal:");
if (color.toLowerCase() === "red") {
    alert("Must Stop");
}
if (color.toLowerCase() === "yellow") {
    alert("Ready to move");
}
if (color.toLowerCase() === "green") {
    alert("Move Now");
}

var fuel = prompt("Please Enter Remaining Fuel in Liters:");
if (parseFloat(fuel) < 0.25) {
    alert("Please refill the fuel in your car");
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {    
    alert("car is smaller than cat");
}

var totalMarks = 300;
var marks1= prompt("Enter Marks of Subject 1:");
var marks2= prompt("Enter Marks of Subject 2:");
var marks3= prompt("Enter Marks of Subject 3:");
var obtainedMarks = parseFloat(marks1) + parseFloat(marks2) + parseFloat(marks3);
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

if (percentage >= 80) {
    document.write("<p>Grade: A-one</p>");
    document.write("<p>Remarks: Excellent</p>");
}
else if (percentage >= 70) {
    document.write("<p>Grade: A</p>");
    document.write("<p>Remarks: Good</p>");
}
else if (percentage >= 60) {
    document.write("<p>Grade: B</p>");
    document.write("<p>Remarks: You need to improve</p>");
}
else if (percentage < 60) {
    document.write("<p>Grade: Fail</p>");
    document.write("<p>Remarks: Sorry</p>");
}


var secretNumber = 5;
var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (guess === secretNumber) {
    alert("Bingo! Correct answer.");
}
else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Wrong guess. Try again!");
}

var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert("The number is divisible by 3.");
}
else {
    alert("The number is not divisible by 3.");
}

var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert("The number is even.");
}
else {
    alert("The number is odd.");
}

var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The weather today is normal.");
}
else if (temperature > 20) {
    alert("Today's weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
}
else {
    alert("It's freezing outside.");
}


var firstNumber = parseFloat(prompt("Enter first number:"));
var secondNumber = parseFloat(prompt("Enter second number:"));
var operator = prompt("Enter operator (+, -, *, /, %):");
var result;
if (operator === "+") {
    result = firstNumber + secondNumber;
}
else if (operator === "-") {
    result = firstNumber - secondNumber;
}
else if (operator === "*") {
    result = firstNumber * secondNumber;
}
else if (operator === "/") {
    result = firstNumber / secondNumber;
}
else if (operator === "%") {
    result = firstNumber % secondNumber;
}
else {
    alert("Invalid operator.");
}
alert("Result: " + result);
