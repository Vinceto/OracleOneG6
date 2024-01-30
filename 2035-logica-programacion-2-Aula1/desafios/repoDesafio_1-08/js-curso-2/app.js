let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

let msg = "";
function msgBtnConcole () {
    console.log("El botón fue clicado");
}

function msgBtnPrompt(){
    msg = prompt("Indicame el nombre de una ciudad de Brazil:");
    alert(`Estube en  ${msg} y me acorde de ti`);
}

function msgBtnAlert(){
    msg = "Yo amo JS";
    alert(msg);
}

function msgBtnSuma(){
    let numeroA = numeroUsuario = parseInt(prompt("Indicame el primer numero para la suma:"));
    let numeroB = numeroUsuario = parseInt(prompt("Ahora un segundo numero:"));
    alert(`${numeroA} + ${numeroB} = ${numeroA + numeroB}`)
}