let elemento = document.getElementById("menu");
let contenedor = document.getElementById("main_container");


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

let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}
function currentSlide(n) {
    showSlides(slideIndex = n)
}
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".main_mySlides");
    let quadrates = document.querySelectorAll(".quadrate");
    if (n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < quadrates.length; i++) {
        quadrates[i].className = quadrates[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    quadrates[slideIndex - 1].className += " active";
}




