

function showWork(type){
    let work = document.querySelectorAll(".work")
    work.forEach(works => {
        let work_type = Number(works.getAttribute("type"))
        switch(Number(type)){
            case work_type:
                works.style.display = "flex"
                break;
            case 0:
                works.style.display = "flex"
                break;
            default:
                works.style.display = "none"
                break;
        }
    });
}


function addEventNav(){
    let nav_texts = document.querySelectorAll(".nav_text")
    nav_texts.forEach(nav_text => {
        nav_text.addEventListener("click", function(){
            let type = Number(nav_text.getAttribute("type"))
            chaseMouse(nav_text.offsetWidth, nav_text.offsetLeft)
            showWork(type)
        })
    });
}

addEventNav()

function chaseMouse(width, left){
    let tab = document.getElementById("tab")
    tab.style.width = Number(width) + "px";
    tab.style.left = Number(left) + "px"
}

function setTabSize(){
    let nav_text = document.getElementsByClassName("nav_text")[0]
    chaseMouse(nav_text.offsetWidth, nav_text.offsetLeft)
}

setTabSize()

function setOpSize(){
    let op = document.getElementsByClassName("op-container")[0]
    op.style.width = window.innerHeight + "px"
}

setOpSize()