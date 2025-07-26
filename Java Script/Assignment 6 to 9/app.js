var x=10;
document.write("Result:<br>The value of x is: " + x+ ".<br>....................................................");
document.write(" <br>The value of ++x is: " + ++x + ".");
document.write("<br>Now the value of x is: " + x + ".");

document.write("<br><br><br>The value of x++ is: " + x++ + ".");
document.write("<br>Now the value of x is: " + x + ".");

document.write(`<br><br><br>The value of --x is: ${--x}.`);
document.write(`<br>Now the value of x is: ${x}.`);

document.write(`<br><br><br>The value of x-- is: ${x--}.`);
document.write(`<br>Now the value of x is: ${x}.`);


var a= 2;
var b= 1;
document.write(`<br><br>The value of a is: ${a}.`);
document.write(`<br>The value of b is: ${b}.`);
var result= --a - --b + ++b + b--;
document.write(`<br>The value of result is: ${result}.`);

var userName = prompt("Enter your name:");
alert(`Hello ${userName}! Welcome to the JavaScript world!`);


// Take user input and convert to number directly
var number = +prompt("Enter a number for the multiplication table:");

// If user enters nothing or an invalid number, use default value 5
if (!number) {
  number = 5;
}

// Show the multiplication table
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " × " + i + " = " + (number * i) + "<br>");
}


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarksPerSubject = 100;

var marks1 = +prompt(`Enter obtained marks of ${subject1}:`);
var marks2 = +prompt(`Enter obtained marks of ${subject2}:`);
var marks3 = +prompt(`Enter obtained marks of ${subject3}:`);

var totalObtainedMarks = marks1 + marks2 + marks3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write(`<tr><td>${subject1}</td><td>${totalMarksPerSubject}</td><td>${marks1}</td></tr>`);
document.write(`<tr><td>${subject2}</td><td>${totalMarksPerSubject}</td><td>${marks2}</td></tr>`);
document.write(`<tr><td>${subject3}</td><td>${totalMarksPerSubject}</td><td>${marks3}</td></tr>`);
document.write(`<tr><td><strong>Total</strong></td><td>${totalMarks}</td><td>${totalObtainedMarks}</td></tr>`);
document.write(`<tr><td><strong>Percentage</strong></td><td colspan='2'>${percentage.toFixed(2)}%</td></tr>`);
document.write("</table>");
