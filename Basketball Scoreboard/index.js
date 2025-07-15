let output = document.getElementById("home")
let guestOutput = document.getElementById("guest")
function addOne(){
    output.innerText = Number(output.innerText) + 1
}
function addTwo(){
    output.innerText = Number(output.innerText) + 2 
}
function addThree(){
    output.innerText = Number(output.innerText) + 3 
}


function gaddOne(){
    guestOutput.innerText = Number( guestOutput.innerText ) + 1
}
function gaddTwo(){
    guestOutput.innerText  = Number( guestOutput.innerText ) + 2 
}
function gaddThree(){
    guestOutput.innerText  = Number( guestOutput.innerText ) + 3 
}

function homeReset(){
    output.innerText = 0;
}
function guestReset(){
    guestOutput.innerText = 0;
}