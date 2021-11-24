const valor = document.getElementById('valor');
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const resultado = document.getElementById('resultado');
const convertir = document.getElementById('convertir');

convertir.addEventListener('click',hacerConversion);
function hacerConversion() {
    




    switch (select1.value) {
        case "mm":
            if (select2.value=="cm") {
                resultado.innerHTML = valor.value/10
            }
            else if(select2.value=="mts") {
                resultado.innerHTML = valor.value/100
            }
            else {
                resultado.innerHTML = valor.value
            }
        break;
        case "cm":
            if (select2.value=="mm") {
                resultado.innerHTML = valor.value*10
            }
            else if(select2.value=="mts") {
                resultado.innerHTML = valor.value/100
            }
            else {
                resultado.innerHTML = valor.value;
            }

        break;
        case "mts":
            if (select2.value=="mm") {
                resultado.innerHTML = valor.value*1000
            }
            else if (select2.value=="cm") {
                resultado.innerHTML = valor.value*100
            }
            else {
                resultado.innerHTML = valor.value;
            }
            
        break;
    }
}
