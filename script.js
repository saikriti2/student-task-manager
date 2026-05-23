let tasks=[];

function addTask(){

    let input=document.getElementById("taskInput");

    let taskText=input.value.trim();

    if(taskText===""){

        alert("Enter a task");
        return;
    }

    tasks.push(taskText);

    input.value="";

    displayTasks();

}

function displayTasks(){

    let list=document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach((task,index)=>{

        let li=document.createElement("li");

        li.innerHTML=`

        <span onclick="completeTask(this)">
        ${task}
        </span>

        <button onclick="deleteTask(${index})">
        Delete
        </button>

        `;

        list.appendChild(li);

    });

}

function deleteTask(index){

    tasks.splice(index,1);

    displayTasks();

}

function completeTask(element){

    element.classList.toggle("completed");

}