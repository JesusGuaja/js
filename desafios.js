
const num1 = document.getElementById("num1");
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');
const sumar = document.getElementById('sumar');
var total;

sumar.addEventListener('click',result);
function result() {
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    total = (num1+num2); 
    resultado.innerHTML = total
}

/*
const click1 = document.getElementById('rojo');
const fondo = document.getElementsByClassName('fondo');

click1.addEventListener('click',cambiarColor);
function cambiarColor() {
    fondo.classList.remove("fondo");
    fondo.classList.add("amarillo");
    console.log("cambio");
}
*/