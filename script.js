console.log(document.getElementById('texto'));
const titulo = document.getElementById('texto');
const parrafo = document.getElementById('parrafo');

if (titulo.classList.contains("rojo")) {
    console.log("existe");
    titulo.classList.remove("rojo");
    titulo.classList.add("verde");
}
else {
    console.log("no existe")
    titulo.classList.add("rojo")
}

setTimeout(cambiarNombre, 5000);
function cambiarNombre() {
    parrafo.innerHTML=("Hola me llamo juancarlos");
}