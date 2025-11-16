var currentdate = new Date();
console.log(currentdate);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var shortday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log("Current Month: " + months[currentdate.getMonth()]);

alert("Today is " + shortday[currentdate.getDay()])

if (currentdate.getDay() == 0 || currentdate.getDay() == 6) {
    alert("It's Fun day");
}


if (currentdate.getDate() < 16) {
    console.log("First fifteen days of the month");
}
else {
    console.log("Last days of the month");
}

var millisec = currentdate.getTime();
document.write("<h1>Elapsed milliseconds since January 1,1970: " + millisec + "</h1>");
document.write("<h1>Elapsed minutes since January 1,1970: " + (millisec / (1000 * 60)) + "</h1>");

if (currentdate.getHours() < 12) {
    console.log("It's AM");
}
else {
    console.log("It's PM");
}

var laterdate = new Date("December 31, 2020");
console.log("Later date: " + laterdate);

var referenceDate = new Date("January 1, 2015 22:50:16");
var ramadanStart = new Date("June 18, 2015");
var diff = ramadanStart - referenceDate;
var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(daysPassed + " days have passed since 1st Ramadan, 2015");

daysPassed = Math.floor(diff / (1000 * 60));
console.log(`On referance date ${referenceDate}, ${daysPassed} minutes had passed since beginning of 2015`);

var currentdate2 = new Date();
console.log("Current Date: " + currentdate2);
currentdate2.setHours(currentdate2.getHours() - 1);
console.log("1 hour ago, it was " + currentdate2);

var currentdate3 = new Date();
currentdate3.setFullYear(currentdate3.getFullYear() - 100);
alert("Current Date: " + new Date() + "\n100 years back, it was " + currentdate3);

var userAge = prompt("Enter your age:");
var birthYear = currentdate.getFullYear() - parseInt(userAge);
alert("Your birth year is: " + birthYear);

document.write("<h1>K-Electric Bill</h1>");
var customerName = "John Doe";
var month = months[currentdate.getMonth()];
var unitsConsumed = 410;
var chargesPerUnit = 16;
var netAmount = unitsConsumed * chargesPerUnit;
var latePaymentSurcharge = 350;
var grossAmount = netAmount + latePaymentSurcharge;
document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + month + "</b><br>");
document.write("Number of units: <b>" + unitsConsumed + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");
document.write("Net Amount Payable (within Due Date): <b>" + netAmount.toFixed(2) + "</b><br>");
document.write("Late Payment Surcharge: <b>" + latePaymentSurcharge.toFixed(2) + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount.toFixed(2) + "</b><br>");