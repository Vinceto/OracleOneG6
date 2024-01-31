let numeroSecreto = 0;
let intentos = 0;
let maxIntentos = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', `El numero secreto es menor, van ${intentos} ${(intentos===1)?'intento':'intentos'}`);
        }else{
            asignarTextoElemento('p', `El numero secreto es mayor, van ${intentos} ${(intentos===1)?'intento':'intentos'}`);
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function generaNumeroSecreto() {
    if (listaNumerosSorteados.length === maxIntentos) {
        asignarTextoElemento('p', '¡Ya se sortearon todos los numeros posibles!');
        return;
    }

    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generaNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
    }

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Selecciona un numero del 1 al ${maxIntentos}`);
    numeroSecreto = generaNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
    maxIntentos = 10;
}
function iniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

iniciarJuego();