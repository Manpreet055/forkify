var number = +prompt("Enter a positive number:");
document.write("Number : "  + number + "<br>");
document.write("Round off value : " + Math.round(number) + "<br>");
document.write("Floor value : " + Math.floor(number) + "<br>");
document.write("Ceil value : " + Math.ceil(number) + "<br>");

var negativeNumber = +prompt("Enter a negative floating point number:");
document.write("<br>Number : "  + negativeNumber + "<br>");
document.write("Round off value : " + Math.round(negativeNumber) + "<br>");
document.write("Floor value : " + Math.floor(negativeNumber) + "<br>");
document.write("Ceil value : " + Math.ceil(negativeNumber) + "<br>");

var absoluteValue = +prompt("Enter a number to find its absolute value:");
document.write("<br>The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue) + "<br>");

diceroll = Math.floor(Math.random() * 6) + 1;
document.write("<br>Random dice value: " + diceroll + "<br>");

coinToss = Math.floor(Math.random() * 2) + 1;
var coinSide = (coinToss === 2) ? "Heads" : "Tails";
document.write("<br>" + coinSide + "<br>");
document.write("Random coin value: " + coinToss + "<br>");

var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("<br>Random number between 1 and 100: " + randomNumber + "<br>");

var userWeight = prompt("Enter your weight in kilograms (e.g., '70', '70kgs', '70.5kilograms'):");
var weight = parseFloat(userWeight);
document.write("<br>The weight of user is " + weight + " kilograms<br>");

secretRandomNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Enter a number between 1 and 10 to guess the secret number:");
if (userGuess === secretRandomNumber) {
    alert("Congratulations! You guessed the correct number.");
}
else {
    alert("OOPS! The correct number was " + secretRandomNumber + ".");
}