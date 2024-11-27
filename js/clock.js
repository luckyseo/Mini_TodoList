const clock=document.querySelector("#clock")

function getClock(){
    const date = new Date()
    const hours = date.getHours().toString().padStart(2,"0")
    const Minutes = date.getMinutes().toString().padStart(2,"0")
    const seconds = date.getSeconds().toString().padStart(2,"0")
//OR date.toLocalTimeString()
//or date.toLocalTimeString("en-US",{hours12:false})
//String() or .toString()
    clock.innerText = `${hours}:${Minutes}:${seconds}`
}   
getClock() //when the browser opens
setInterval(getClock, 1000); //repeat