document.addEventListener("mousemove",addRandom);
const fake = document.getElementById("fake")
const McGovern = document.getElementById("McGovern")
var randomization = 0;
function addRandom(){
    randomization = Math.floor(Math.random()*5+10);
}
McGovern.addEventListener("mouseenter", activate)
McGovern.addEventListener("mouseleave", appear)
function activate(){
    random = Math.floor(Math.random()*10)
    switch(random){
        case 0:
            fake.style.visibility = "hidden";
            break;
        case 1:
            errors();
            break;
        case 2:
            fake.style.visibility = "hidden";
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
function appear(){
    fake.style.visibility = "visible"
}