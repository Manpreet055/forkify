let addTaskBtn = document.getElementById("addBtn");
let newTaskInput = document.getElementById("todoInput")
let clearItemsBtn = document.querySelector(".clear-all-btn")
let todoList = document.querySelector("#todoList")  //ul
let clearAllItems = document.querySelector(".clear-all-btn")
let todoListContainer = document.querySelector(".todo-list-container")


const updateEmptyState = ()=>{
    const existingEmpty = document.querySelector(".empty-state")
    if (todoList.children.length === 0) {
        if (!existingEmpty) {
            let div = document.createElement("div")
            div.className = "empty-state"
        
            let p = document.createElement("p")
            p.innerText = "No task added yet"
            div.appendChild(p);
            todoListContainer.appendChild(div)
        }
    } 
    else {
        if (existingEmpty) existingEmpty.remove();
    }
}
updateEmptyState()

addTaskBtn.addEventListener("click", getValue)

newTaskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        getValue();
    }
});

function getValue() {
    const value = newTaskInput.value.trim();

    if (value === "") return;

    list(value)
    newTaskInput.value = "";
    updateEmptyState();
}

const list = (text)=>{

    let li = document.createElement("li")
    li.className = "todo-item"

   

    let checkbox = document.createElement("button")
    checkbox.className = "tick-btn"
    checkbox.addEventListener("click", ()=>{
        if (checkbox.classList.contains("completed")) {
            
            checkbox.classList.remove("completed")
            li.classList.remove("completed")

        }
        else{
            checkbox.classList.add("completed")
            li.classList.add("completed")


        }
    })

    let span = document.createElement('span')
    span.innerText = text
    span.className = 'todo-text'

    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.classList.add('edit-btn', 'completed')

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.className = "delete-btn"

    

    let div1 = document.createElement("div"); // top row
    div1.className = "div1"
    div1.appendChild(checkbox);
    div1.appendChild(span);
    
    let div2 = document.createElement("div"); // bottom row
    div2.className = "div2"
    div2.appendChild(editBtn);
    div2.appendChild(deleteBtn);
    
    li.appendChild(div1);
    li.appendChild(div2);

    todoList.appendChild(li);

    const updateTaskCount = ()=>{
        let count = todoList.children.length
        let taskcount = document.querySelector("#taskCount")
        taskcount.textContent = `${count} tasks remaining`
    }
    updateTaskCount();

    clearAllItems.addEventListener("click", ()=>{
        todoList.innerHTML = ""
        updateTaskCount()
        updateEmptyState()
    })

    deleteBtn.addEventListener("click", ()=>{
        if (!(checkbox.classList.contains("completed"))){
         li.remove()
         updateTaskCount()
         updateEmptyState()
        }
    })
    editBtn.addEventListener("click", ()=>{
        if (!(checkbox.classList.contains("completed"))){
            let input = document.createElement("input")
            input.type = "text"
            input.value = span.innerText
            input.classList.add("todo-text", "editing")

            span.replaceWith(input)

            let saveBtn = document.createElement("button")
            saveBtn.classList.add('edit-btn', 'completed')
            saveBtn.textContent = "Save"
            editBtn.replaceWith(saveBtn)


        const saveValue = ()=>{
            
            let newValue = input.value.trim()
            if (newValue === "") return;

            span.innerText = newValue
            input.replaceWith(span)
            saveBtn.replaceWith(editBtn)
        }
            saveBtn.addEventListener("click", saveValue)

            input.addEventListener("keydown", (e)=>{
                if (e.key ==="Enter") {
                    saveValue()
                }
            })
            input.focus();
        }
    })


}