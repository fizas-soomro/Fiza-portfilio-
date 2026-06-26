let mode =
document.getElementById("mode");


mode.onclick = ()=>{


document.body.classList.toggle("light");



if(document.body.classList.contains("light")){


mode.innerHTML="☀️";


}

else{


mode.innerHTML="🌙";


}



}