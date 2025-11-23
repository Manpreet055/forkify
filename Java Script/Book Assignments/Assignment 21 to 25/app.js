String.prototype.toTitleCase = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
var firstName = prompt("Enter your first name:").trim();
var lastName = prompt("Enter your last name:").trim();
var fullName = `${firstName.toTitleCase()} ${lastName.toTitleCase()}`;
alert("Hello, " + fullName + "! Welcome to our website.");

var mobilePhone = prompt("Enter your favourite mobile phone:");

var mobiles = ["iphone", "samsung galaxy", "google pixel", "oneplus", "xiaomi", "nokia", "sony", "motorola", "redmi", "oppo", "vivo", "huawei", "lenovo", "realme", "infinix", "itel", "techno", "aquas", "lava", "micromax", "asus", "lg", "htc", "blackberry", "alcatel", "meizu", "coolpad", "nokia", "honor", "poco", "iqoo", "zte"];
var mobileFound = false;
for (var i = 0; i < mobiles.length; i++) {
    if (mobiles[i].toLowerCase() === mobilePhone.toLowerCase()) {
        document.write("<h1>My Favourite Phone is: " + mobiles[i].toTitleCase() + "</h1>");
        document.write("<h2>Length of String: " + mobiles[i].length + "</h2>");
        mobileFound = true;
        break;
    }
}
if (!mobileFound) {
    alert("Sorry! your phone is not in the list.");
}

var string = "Pakistani";
var index = string.indexOf('n');
if (index !== -1) {
    document.write("<h1>String: " + string + "</h1>");
    document.write("<h2>Index of 'n': " + index + "</h2>");
}

var string = "Hello World";
var index = string.lastIndexOf('l');
if (index !== -1) {
    document.write("<h1>String: " + string + "</h1>");
    document.write("<h2>Last index of 'l': " + index + "</h2>");
}

var string = "Pakistani";
var index = string.charAt(3);
document.write("<h1>String: " + string + "</h1>");
document.write("<h2>Character at index 3: " + index + "</h2>");

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("<h1>City: " + city + "</h1>");
document.write("<h2>After Replacement: " + newCity + "</h2>");

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("<h2>Message: " + message + "</h2>");
document.write("<h2>After Replacement: " + newMessage + "</h2>");

var string = "472";
document.write("<h1>Value: " + string + "</h1>");
document.write("<h1>Type: " + typeof string + "</h1>");
var number = Number(string);
document.write("<h1>Value: " + number + "</h1>");
document.write("<h1>Type: " + typeof number + "</h1>");

var userInput1 = prompt("Enter some text:");
var upperCaseInput = userInput1.toUpperCase();
document.write("<h1>User Input: " + userInput1 + "</h1>");
document.write("<h1>Upper Case: " + upperCaseInput + "</h1>");


var userInput2 = prompt("Enter some text:");
var titleUpperCaseInput = userInput2.toTitleCase();
document.write("<h1>User Input: " + userInput2 + "</h1>");
document.write("<h1>Title Case: " + titleUpperCaseInput + "</h1>");

var num = 35.36;
var numStr = num.toString().replace(".", "");
document.write("<h1>Number: " + num + "</h1>");
document.write("<h1>Result: " + numStr + "</h1>");


var password;
while (true) {
    password = prompt("Enter your password:").trim();

    // 1. Length check
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        continue;
    }

    // 2. First character must be alphabet
    var firstChar = password.charCodeAt(0);
    if (!((firstChar >= 65 && firstChar <= 90) || (firstChar >= 97 && firstChar <= 122))) {
        alert("Password must start with a letter.");
        continue;
    }

    // 3. Check rest of characters
    var hasNumber = false;
    var hasSpecial = false;

    for (var i = 0; i < password.length; i++) {
        var code = password.charCodeAt(i);

        if (code >= 48 && code <= 57) {
            hasNumber = true;   // 0–9
        } else if (
            !( (code >= 65 && code <= 90) || 
               (code >= 97 && code <= 122) || 
               (code >= 48 && code <= 57) )
        ) {
            hasSpecial = true;  // everything else is special
        }
    }

    if (!hasNumber) {
        alert("Password must contain at least one number.");
    } else if (!hasSpecial) {
        alert("Password must contain at least one special character.");
    } else {
        break; // ✅ all conditions passed
    }
}
alert("Password accepted!");


var university = "University of Karachi";   
var chars = university.split('');
for (var i = 0; i < chars.length; i++) {
    document.write(chars[i]+"<br>");
}

var userInput3 = prompt("Enter some text:");
var lastChar = userInput3.charAt(userInput3.length - 1);
document.write("<h1>User Input: " + userInput3 + "</h1>");
document.write("<h1>Last Character of Input: " + lastChar + "</h1>");

var string = "The quick brown fox jumps over the lazy dog";
var count = (string.toLowerCase().match(/the/g) || []).length;
document.write("<h1>Text: " + string + "</h1>");
document.write("<h1>There are " + count + " occurrence(s) of word 'the'</h1>");