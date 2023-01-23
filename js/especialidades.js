let elemento2 = document.getElementById("menu");
let contenedor2=document.getElementById("main");

function desactivar() {
    elemento2.checked = false
}


function activar(){
    if(elemento2.checked==true){
     contenedor2.classList.add("space2");
    }else{
        contenedor2.classList.remove("space2");
    }
}