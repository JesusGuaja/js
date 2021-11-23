const fondo = document.getElementById('fondo');
const boton1 = document.getElementById('btn1');
const boton2 = document.getElementById('btn2');
const boton3 = document.getElementById('btn3');

boton1.addEventListener('click',cambiarFondo);
function cambiarFondo() {
    fondo.classList.remove("fondos");
    fondo.classList.remove("amarillo");
    fondo.classList.remove("azul");
    fondo.classList.add("rojo");
}

boton2.addEventListener('click',cambiarFondos);
function cambiarFondos() {
    fondo.classList.remove("rojo");
    fondo.classList.remove("azul");
    fondo.classList.add("amarillo");
}

boton3.addEventListener('click',cambiarFond);
function cambiarFond() {
    fondo.classList.remove("amarillo");
    fondo.classList.remove("rojo");
    fondo.classList.add("azul");
}