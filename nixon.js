document.addEventListener("mousemove",addRandom);
const fake = document.getElementById("fake")
const McGovern = document.getElementById("McGovern")
var randomization = 0;
document.getElementById("Nixon").addEventListener("mouseover",forNixon)
document.getElementById("Nixon").addEventListener("mouseleave",leftNixon)
document.addEventListener("contextmenu",vote)
function forNixon(){
    document.getElementById("doit").style.visibility = "visible"
}
function leftNixon(){
    document.getElementById("doit").style.visibility = "hidden"
}
function addRandom(){
    randomization = Math.floor(Math.random()*5+20);
    document.removeEventListener("mousemove",addRandom)
}
McGovern.addEventListener("click", activate)
function activate(event){
    random = Math.floor(Math.random()*2)
    switch(random){
        case 0:
            McGovern.style.backgroundColor = "red"
            setTimeout(() => {removeE(0)}, 1500);
            break;
        case 1:
            errors();
            setTimeout(() => {removeE(1)}, 1500);
            break;
    }
    
}
function errors(){
    for(let i = 0;i < randomization ;i++)
    {
        let errorWin = document.createElement("div")
        errorWin.innerHTML = "ERROR"
        errorWin.className = "errors"
        body.appendChild(errorWin);
    }
    let errors = document.getElementsByClassName("errors")
    for(let i = 0;i<errors.length ;i++)
    {
        errors[i].style.top = (window.innerHeight - Math.round(window.innerHeight * Math.random())) + "px"
        errors[i].style.left = (window.innerWidth - Math.round(window.innerWidth * Math.random())) + "px"
    }
    console.log(window.innerHeight)
    console.log(window.innerWidth)
}
let er;
function removeE(pick){
    
    switch(pick){
        case 0:
            McGovern.style.backgroundColor = "transparent"
            break;
        case 1:
            er = document.querySelectorAll(".errors")
            for(let i = 0; i<er.length ;i++)
            {
                er[i].remove();
                console.log("E")
            }
            break;
    }
}
const voteFor =  document.getElementById("voteStart").style
function vote(){
    voteFor.visibility = "visible"
    setTimeout(hidden,500)
}
function hidden(){
    voteFor.visibility = "hidden"
}
