const ratio = Math.round(100*(window.innerHeight/window.innerWidth))/100;


document.addEventListener("keydown",event=>{if(event.key=="F12"){
event.preventDefault();
}});

document.addEventListener("keydown",event=>{if(event.ctrlKey&&event.shiftKey){
event.preventDefault();
}});

document.addEventListener('contextmenu', event=>{
event.preventDefault()
});

function checkTheWindow()
{
 if(Math.round(100*(window.innerHeight/window.innerWidth))/100!=ratio)
 {
 var body=document.querySelector("body");
 body.innerHTML="<form id='get_out' action='gameFiles/code/data.html' method='post'>";
 body.innerHTML= body.innerHTML+"<input type='hidden' name='wtf' value=':('></form>"
 var lol=document.getElementById("get_out");
 lol.submit();
 return true;
 }
return false; 
}

