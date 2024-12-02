const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")
const todoInput = todoForm.querySelector("input")

const TODOS_KEY ="toDos"

let toDos = []; 
//const->let to update! if not, it doesn't store old todoList

function saveTodos(){
    localStorage.setItem("toDos",JSON.stringify(toDos))
    //JSON.parse(toDos) -> back to list from string
    //JSON.parse(localStorage.getItem("toDOs"))
}

function deleteTodo(event){
   //console.log(event.target.parentElement.innerText)
   const li = event.target.parentElement;
   li.remove()
   toDos = toDos.filter(todo => todo.id !== parseInt(li.id))
   saveTodos()
}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id=newTodoObj.id
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
 
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
   // console.log(newTodo)
    //localStorage only saves tubple not list
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj) 
    paintTodo(newTodoObj);
    todoInput.value = "";
    saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY) //string

if(savedTodos !==null){
    const parsedToDos = JSON.parse(savedTodos); //array
    toDos = parsedToDos; //get old todoList
    parsedToDos.forEach(paintTodo);
}

