const fondo = document.getElementById('fondo');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const separa = document.getElementById('separa');

separa.addEventListener('input',cambiarFondo);
function cambiarFondo() {
    console.log(color1.value);
    console.log(color2.value);
    console.log(separa.value);
    fondo.style.background = `linear-gradient(to right, ${color1.value} ${separa.value}%, ${color2.value})`;
}