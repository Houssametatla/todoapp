`<div class="task">
<p>Build a Task app in 2030</p>
<div class="items">
    <input type="button" value="EDIT">
    <input type="button" value="DELETE">
</div>
</div>`

const inputTask = document.getElementById("enteredTask")
const addTaskBtn = document.getElementById("addTaskBtn")

const parentDiv = document.getElementById("parentDivTask")

addTaskBtn.addEventListener("click",()=>{ 
    const enteredTask = inputTask.value 
    


const taskDiv = document.createElement("div")
taskDiv.classList.add("task")

const taskDivInput = document.createElement("input")
taskDivInput.value = enteredTask
taskDivInput.setAttribute("readonly","readonly")
taskDivInput.classList.add("inpt")

taskDiv.appendChild(taskDivInput)

const anotherDiv = document.createElement("div")
anotherDiv.classList.add("items")

const EditInput = document.createElement("input")
const DeleteInput = document.createElement("input")

EditInput.type = "button"
DeleteInput.type = "button"
EditInput.value = "EDIT"
DeleteInput.value = "DELETE"

anotherDiv.appendChild(EditInput)
anotherDiv.appendChild(DeleteInput)

taskDiv.appendChild(anotherDiv)

parentDiv.appendChild(taskDiv)

DeleteInput.addEventListener("click",()=>{
    parentDiv.removeChild(taskDiv)

    
})

EditInput.addEventListener("click",()=>{
    if (EditInput.value === "EDIT") {
        taskDivInput.removeAttribute("readonly")
        EditInput.value = "SAVE"
    } else {
        EditInput.value = "EDIT"
        taskDivInput.setAttribute("readonly","readonly")
        
    } 
    
    
})



})

  
