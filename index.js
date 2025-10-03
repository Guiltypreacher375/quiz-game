let username=document.getElementById("username");
let submit=document.getElementById("submit");
let myH3= document.getElementById("myH3");
let clickMe= document.getElementById("clickMe");


clickMe.addEventListener("click",greet);
submit.addEventListener("click",display);

function display(){
    myH3.innerHTML="Hello " + (username.value);
}


function greet(){
    clickMe.alert("hello shintone");
}



    
