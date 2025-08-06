var studentNames = [];

var studentNames = new Array();

var stringArray = ["john","mary","peter","Bill","Alice"];
var numberArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true, false];
var mixedArray = [1, "hello", true, null, undefined];

var qualification = ["SSC", "HSC", "BCS", "BS" ,"BCOM", "MS", "M.Phil", "PhD"];

document.write("<h1>Qualifications</h1>");
for (var i = 0; i < qualification.length; i++) {
    document.write([i+1]+ ") " +qualification[i] + "<br>");
}

studentNames.splice(0, 0, "Michael","John","Tony");
var studentScores = [320, 230, 480];
var totalMarks = 500;
var percentage = [];
for (var i = 0; i < studentScores.length; i++) {
    percentage[i] = (studentScores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage[i] + "%<br>");
}

// Initialize array with color names
let colors = ["Red", "Green", "Blue", "Yellow"];
document.write("<h3>Initial Colors: </h3>" + colors.join(", ") );

// a. Add color at the beginning
let colorStart = prompt("Which color do you want to add at the beginning?");
colors.unshift(colorStart);
document.write("<h3>After adding at beginning: </h3>" + colors.join(", "));

// b. Add color at the end
let colorEnd = prompt("Which color do you want to add at the end?");
colors.push(colorEnd);
document.write("<h3>After adding at end: </h3>" + colors.join(", ") );

// c. Add two colors at the beginning
colors.unshift("Orange", "Purple");
document.write("<h3>After adding two colors at beginning: </h3>" + colors.join(", ") );

// d. Delete the first color
colors.shift();
document.write("<h3>After deleting the first color: </h3>" + colors.join(", ") );

// e. Delete the last color
colors.pop();
document.write("<h3>After deleting the last color: </h3>" + colors.join(", ") );

// f. Add color at user-defined index
let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
let colorToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<h3>After adding at index " + indexToAdd + ": </h3>" + colors.join(", ") );

// g. Delete color(s) from user-defined index
let indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));
let numberToDelete = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(indexToDelete, numberToDelete);
document.write("<h3>After deleting from index " + indexToDelete + ": </h3>" + colors.join(", ") );

var studentScores = [320, 230, 480, 120];
document.write("<h3>Score of Students</h3>" +studentScores.join(", "));
studentScores.sort(function(a, b){
     return a - b;
    }
);
document.write("<h3>Ordered Scores of Students: </h3>" + studentScores.join(", "));


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h3>Cities List</h3>" + cities.join(", "));
var selectedCities = cities.slice(2, 4);
document.write("<h3>Selected Cities List</h3>" + selectedCities.join(", "));


var arr = ["This", "is", "my", "cat"];
document.write("<h3>Array: </h3>" + arr.join(","));
document.write("<h3>String: </h3>" + arr.join(" "));


var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("<h3>Devices: </h3>" + devices.join(", "));
document.write("<h3>Out: </h3>" + devices.shift());
document.write("<h3>Out: </h3>" + devices.shift());
document.write("<h3>Out: </h3>" + devices.shift());
document.write("<h3>Out: </h3>" + devices.shift());


devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("<h3>Devices: </h3>" + devices.join(", "));
document.write("<h3>Out: </h3>" + devices.pop());
document.write("<h3>Out: </h3>" + devices.pop());
document.write("<h3>Out: </h3>" + devices.pop());
document.write("<h3>Out: </h3>" + devices.pop());



var phoneManufacture = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h3>Phone Manufacturers: </h3>");

document.write("<select>")
for (var i = 0; i < phoneManufacture.length; i++) {
    document.write("<option>" + phoneManufacture[i] + "</option>");
}
document.write("</select>");
