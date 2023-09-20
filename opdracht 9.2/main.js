let open = document.querySelector(".open")
let closed = document.querySelector(".gesloten")

function openFace() {
    if(open.classList.contains("active")) {
        closed.classList.add("active")
        open.classList.remove("active")
    }
}


function closedFace(){
    if(closed.classList.contains("active")) {
        open.classList.add("active")
        closed.classList.remove("active")
    }
}