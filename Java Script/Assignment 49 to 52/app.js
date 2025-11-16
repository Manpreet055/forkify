var display = document.getElementById("displayData")
var form = document.getElementById("signupForm");
document.querySelector("form").addEventListener("submit",function (event){
    event.preventDefault();
    var  name = this.querySelector("#name").value
    var email = this.querySelector("#email").value
    var password = this.querySelector("#password").value

    display.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `
    form.reset()
})

var more = document.querySelector(".more")
var less = document.querySelector(".less")
let content = document.querySelector(".content")

more.addEventListener("click",function (){
    content.style.height = "fit-content";
    less.style.display = "block"
    more.style.display = "none"
})
less.addEventListener("click",function (){
    content.style.height = "200px";
    more.style.display = "block"
    less.style.display = "none"
})

var students = JSON.parse(localStorage.getItem("students")) || [];
var name = document.querySelector("#studentName")
var father = document.querySelector("#fatherName")
var studentClass = document.querySelector("#className")

let studentsForm = document.querySelector("#studentsForm")
studentsForm.addEventListener("submit",function (event){
    event.preventDefault();
    var  studentname = this.querySelector("#studentName").value
    var fatherName = this.querySelector("#fatherName").value
    var className = this.querySelector("#className").value

    students.push({name: studentname,father: fatherName,studentClass: className})
    localStorage.setItem("students", JSON.stringify(students))
    displayStudents()
    studentsForm.reset()
})





var tableHead = document.querySelector("#student-Table thead")
var tableBody = document.querySelector("#student-Table tbody")

function displayStudents(){
    tableBody.innerHTML = ""
    tableHead.innerHTML = ""

    var headrow = document.createElement("tr");
    for (let i = 0; i < students.length; i++) {

        var bodyrow = document.createElement("tr");

        if (!(headrow.innerHTML)) {
            
            headrow.innerHTML = `
            <th>Index</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Class</th>
            <th>Action</th>
            <th>Edit</th>`
            tableHead.appendChild(headrow)
        }

        bodyrow.innerHTML = `
        <td>${i+1}</td>
        <td>${students[i].name}</td>
        <td>${students[i].father}</td>
        <td>${students[i].studentClass}</td>
        <td><button class = "deleteButton" onclick = 'deleteRecord(${i})'>Delete</button></td>
        <td><button class = "editButton" onclick = 'editRecord(${i})'>Edit</button></td>`;

        tableBody.appendChild(bodyrow)
    }
}
function deleteRecord(index){
    students.splice(index,1)
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents()
    
}

var editIndex = null

function editRecord(index){
    editIndex = index;

    document.querySelector("#editForm").style.display = "block";

    document.querySelector("#editName").value = students[index].name;
    document.querySelector("#editFather").value = students[index].father;
    document.querySelector("#editClass").value = students[index].studentClass;
}
function saveEdit(){
    students[editIndex].name = document.querySelector("#editName").value;
    students[editIndex].father = document.querySelector("#editFather").value;
    students[editIndex].studentClass = document.querySelector("#editClass").value;

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents()

    document.querySelector("#editForm").style.display = "none";

}

displayStudents()