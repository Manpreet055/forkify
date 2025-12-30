document.querySelector("button").addEventListener("click", function() {
    const colorName = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0"); // ensures 6 digits

    console.log(colorName);
    document.querySelector("span").textContent = colorName;
    document.getElementById("main").style.backgroundColor = colorName;
});
