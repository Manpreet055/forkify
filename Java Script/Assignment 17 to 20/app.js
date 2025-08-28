let multidimensionalArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
for (let i = 0; i < multidimensionalArray.length; i++) {
    console.log(multidimensionalArray[i].join(" "));
    document.write(multidimensionalArray[i].join(" ")+"<br>");
}

for(let counting= 1; counting <= 10; counting++){
    document.write(counting + "<br>")
}

let multiplicationTable = +prompt("Enter a number to show it's Multiplication Table");
let multiplicationLength = +prompt("Enter a length of multiplication Table")
document.write(`<h3>Multiplication Table of ${multiplicationTable}<br>Length ${multiplicationLength}</h3>`)
for(let table = 1 ; table <= multiplicationLength ; table++){
    document.write(`${multiplicationTable} x ${table} = ${multiplicationTable * table} <br>`)
}

var fruits = ["apple","banana","mango","orange","strawberry"];
for (var j = 0; j < fruits.length; j++) {
    document.write(fruits[j] + "<br>");
}
document.write("<br>")
for (var j = 0; j < fruits.length; j++) {
    document.write(`Element at index ${j} is ${fruits[j]}<br>`)
}
document.write("<br><b>Counting:</b>");
for (let counting = 1; counting <= 15; counting++) {
    if (counting < 15) {
        document.write(counting + ", ");
    } else {
        document.write(counting);
    }
}
document.write("<br><br><b>Reverse Counting:</b>");
for (let counting = 15; counting >= 1; counting--) {
    if (counting > 1 ) {
        document.write(counting + ", ");
    } else {
        document.write(counting);
    }
}
document.write("<br><br><b>Even:</b>");
for (let counting = 2; counting <= 20; counting+=2) {
    if (counting < 20 ) {
        document.write(counting + ", ");
    } else {
        document.write(counting);
    }
}
document.write("<br><br><b>Odd:</b>");
for (let counting = 1; counting <= 19; counting+=2) {
    if (counting < 19 ) {
        document.write(counting + ", ");
    } else {
        document.write(counting);
    }
}
document.write("<br><br><b>Series:</b>");
for (let counting = 2; counting <= 20; counting+=2) {
    if (counting < 20 ) {
        document.write(counting + "k, ");
    } else {
        document.write(counting+"k");
    }
}

const bakeryItems = ["cake","apple pie","cookie","chips","patties"];
let userInput = prompt("Welcome to United Bakery.What do you want to order Sir/Ma'am:");
let isItemAvailable = false;
for (let i = 0; i < bakeryItems.length; i++) {
    if (userInput.toLowerCase() === bakeryItems[i]) {
        document.write(`<br><br><br>${userInput} is available at index ${i} in our bakery.<br>`);
        isItemAvailable = true;
        break;
    }
}
if (isItemAvailable === false) {
    document.write(`We are sorry. ${userInput} is not available in our bakery.<br>`);
}

var numbers = [24, 53, 78, 91, 12];
var largestNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}
document.write("<br><br><b>Array items:</b> " + numbers.join(", ") + "<br>");
document.write(`The largest number is ${largestNumber}.<br>`);


var numbers = [24, 53, 78, 91, 12];
var smallestNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
    }
}
document.write("<br><br><b>Array items:</b> " + numbers.join(", ") + "<br>");
document.write(`The smallest number is ${smallestNumber}.<br>`);

document.write("<br>")
for (let i = 5; i <= 100; i += 5) {
    document.write( i + ", ");
}