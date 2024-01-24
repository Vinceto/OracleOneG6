let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor:");

console.log(numeroUsuario);

/* ejemplo de comentario en un archivo javascript, los comentarios no se ejecutan se usan como recordatorio o explicacion */
// otro ejemplo de comentario

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste el número ${numeroUsuario}`);
}else{
    alert(`Error, ${numeroUsuario} no es el numero. Intenta otra vez!`);
}