let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un número por favor:");

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

    intentos++;
    palabraVeces = "veces";
}