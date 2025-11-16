function showAlert(element) {
    alert(`Thanks for purchasing ${element}`);
}

var students = [
    { name: "Jhone", class: 10 },
    { name: "Doe", class: 9 },
    { name: "Mark", class: 10 },
    { name: "James", class: 8 },
    { name: "Ali", class: 9 },
    { name: "Sara", class: 10 },
    { name: "Ahmed", class: 7 },
    { name: "Fatima", class: 8 },
    { name: "Bilal", class: 9 },
    { name: "Kiran", class: 10 },
    { name: "Haider", class: 8}
];

let tableBody = document.querySelector("#student-Table tbody")
function displayStudents(){
    tableBody.innerHTML = ""

    for (let i = 0; i < students.length; i++) {
        var row = document.createElement("tr");

        row.innerHTML = `<td>${i+1}</td><td>${students[i].name}</td><td>${students[i].class}</td><td><button onclick = 'deleteRecord(${i})'>Delete</button></td>`;

        tableBody.appendChild(row)
    }
}
function deleteRecord(index){
    students.splice(index,1)
    displayStudents()
    
}
deleteRecord()

var img1 = document.body.querySelector(".car1")

img1.addEventListener("mouseover", function (){
      img1.setAttribute("src","./Assets/Car2.webp")
})
img1.addEventListener("mouseout",function (){
      img1.setAttribute("src","./Assets/Car1.webp")
})

function decrease(){
    number = document.body.querySelector("#number")
    number.innerHTML--
}
function reset(){
    number.innerHTML = 0
}
function increase(){
    number.innerHTML++
}