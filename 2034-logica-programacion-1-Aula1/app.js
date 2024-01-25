
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
let maximosIntentos =3;
let numeroMaximoPosible = 0;
while (numeroMaximoPosible < 2){
    numeroMaximoPosible = parseInt(prompt("Inicia el juego. Indicame un numero Maximo para un rango desde 1 hasta:"))
    if(numeroMaximoPosible > 1){
        break;
    }
    alert("El numero debe ser Mayor a 1");
}

let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(numeroUsuario);

    /* ejemplo de comentario en un archivo javascript, los comentarios no se ejecutan se usan como recordatorio o explicacion */
    // otro ejemplo de comentario

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el número ${numeroUsuario}. Intentos: ${intentos} ${palabraVeces}`);
    }else{
        // alert(`Error, ${numeroUsuario} no es el numero. Intenta otra vez!`);
        if (numeroUsuario > numeroSecreto) {
            alert(`El número secreto es menor que ${numeroUsuario}. Intentos: ${intentos} ${palabraVeces}`);
        }else{
            alert(`El número secreto es mayor que ${numeroUsuario}. Intentos: ${intentos} ${palabraVeces}`);
        }
    }
    //incrementa el contador de intentos cada vez que no acierta
    intentos++;
    palabraVeces = "veces";
    //usar el break para interrumpir un ciclo de iteraciones antes si se cumple una condicion
    if(intentos > maximosIntentos){
        alert(`llegaste al número máximo de ${maximosIntentos} intentos`);
        break;
    }

}