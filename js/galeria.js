let elemento = document.getElementById("menu");
let contenedor = document.getElementById("main_container")


function desactivar() {
    elemento.checked = false
}

function activar() {
    if (elemento.checked == true) {
        contenedor.classList.add("space");
    } else {
        contenedor.classList.remove("space");
    }
}


let fullBox = document.getElementById("fullBox")
let fullImg = document.getElementById("fullImg")

function closeImg() {
    fullBox.style.display = "none";
}

function openFullImg(reference) {
    fullBox.style.display = "flex";
    fullImg.src = reference
}