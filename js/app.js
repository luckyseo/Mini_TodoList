const loginForm = document.querySelector("#Login-form")
const loginInput = loginForm.querySelector("#Login-form input");
const greeting = document.querySelector("#greeting")
const title = document.querySelector("head title")

const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    const username = loginInput.value;
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY,username)
    paintGreeting(username)
}


const savedUsername = localStorage.getItem(USERNAME_KEY)

function paintGreeting(savedUsername){
    greeting.innerText=`Hello ${savedUsername}`;
    title.innerText = `Hello ${savedUsername}`;
}
if(savedUsername === null){
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
}else{
    //show the greetings
    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreeting(savedUsername)
}