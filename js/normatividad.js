let elemento3 = document.getElementById("menu");
console.log(elemento3)
let contenedor3=document.getElementById("main_principal");

function desactivar() {
    elemento3.checked = false
}


function activar(){
    if(elemento3.checked==true){
     contenedor3.classList.add("space3");
    }else{
        contenedor3.classList.remove("space3");
    }
}