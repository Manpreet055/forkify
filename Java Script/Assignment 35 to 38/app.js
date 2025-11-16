function currentdate() {
    var date = new Date();
    document.write(date);
}
currentdate();

function greetUser(firstName, lastName) {
    alert("Hello, " + firstName + " " + lastName + "!");
}
greetUser("Abdul", "Sami");

function addTwoNumbers() {
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    var sum = num1 + num2;
    console.log("The sum is: " + sum);
    return sum;
}
addTwoNumbers();

function calculate(num1, num2, operator) {
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}
console.log(calculate(10, 5, '+'));

function square(number) {
    return number * number;
}
console.log("Square of 4 is: " + square(4));

function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    else
        return n * factorial(n - 1);
}
console.log("Factorial of 5 is: " + factorial(5));

function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}
countNumbers(1, 10);

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
        return side * side;
    }
    base = parseFloat(prompt("Enter the base of the triangle:"));
    perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));

    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}
console.log("Hypotenuse is: " + calculateHypotenuse(3, 4).toFixed(2));

// Argument as value
/*function calculateArea(width, height){
    let area = width * height
    console.log("Area of Rectangle is: " + area);
    
}
calculateArea(5,10)
*/

// Argument as User input
function calculateArea(width, height){
    width = parseFloat(prompt("Enter width:"));
    height = parseFloat(prompt("Enter height:"));

    let area = width * height
    console.log("Area of Rectangle is: " + area);
    
}
calculateArea()

function checkPalindrome(word){
    var palindrom = ""
    for(var i= word.length -1 ; i>= 0 ; i--){
        palindrom += word[i]
    }
    if (word == palindrom){
        console.log(word + " is a Palindrom word.");
    }
    else{
        console.log(word + " is not a Palindrom word.");
    }
}
checkPalindrome("madam")

function titleCase(str){
    let words = str.split(" ")
    for(var i= 0; i< words.length; i++ ){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let result = words.join(" ")
    console.log(result);
    

}
titleCase("my name is abdul sami")

function longestWordIn(string){
    let words = string.split(" ")
    let longest = ""
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }
    return longest

}
let result = longestWordIn("Web Development Tutorial");
console.log("Longest word is:", result);

function countLetter(string, letter){
    string = string.split("")
    let letterCount = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i].toLowerCase() == letter.toLowerCase()){
            letterCount++;
        }
    }
    return console.log(letterCount);
    

}
countLetter("Hi, My name is Abdul Sami", "m");

function clacCircumference(radius){
    let circumference = (2*Math.PI*parseFloat(radius)).toFixed(3)
    return console.log("Circumference for radius " + radius + " is: " + circumference+"meter")
}
clacCircumference(2.5+"meter")

function clacArea(radius){
    let area = (Math.PI*Math.pow(parseFloat(radius), 2)).toFixed(3)
    return console.log("Area for radius " + radius + " is: " + area+"m")
}
clacArea(2.5+"m")