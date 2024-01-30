let numeroSecreto = generaNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function generaNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Selecciona un numero del 1 al 10');