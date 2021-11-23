const nota1 = document.getElementById('nt1');
const nota2 = document.getElementById('nt2');
const nota3 = document.getElementById('nt3');
const promediar = document.getElementById('promediar');
const total = document.getElementById('totalp');

let suma;
let divide;

promediar.addEventListener('click',sumaTotal);
function sumaTotal() {
    suma = parseInt(nota1.value)+parseInt(nota2.value)+parseInt(nota3.value);
    divide = suma/3
    total.innerHTML = divide 
}