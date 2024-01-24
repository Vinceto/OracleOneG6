// Desafíos:

// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let dia = prompt("Qué día de la semana es?");
if(dia == "Sábado" || dia == "Domingo"){
    alert("¡Buen fin de semana!")
}else{
    alert("¡Buena semana!")
}
// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Ingresa un número para validar si es positivo o negativo:");
if(numero >= 0){
    alert("es positivo")
}else{
    alert("es negativo")
}
// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let numeroSecreto = Math.floor(Math.random() * 10) + 1;// numero aleatorio entre 1 y 10
let numeroUsuario = prompt("Me indicas un número por favor:");
let puntuacion = 0;

if(numeroUsuario == numeroSecreto){//asigna puntaje si acierta o si esta cerca de acertar 
    puntuacion += 100;
} else if (numeroUsuario >= numeroSecreto - 2 && numeroUsuario <= numeroSecreto + 2) {
    puntuacion += 5;
} else {
    puntuacion += 0;
}

if(puntuacion >= 100){//evalua si tiene puntaje para ganar
    alert(`¡Felicidades, has ganado!. Tu puntuacion es ${puntuacion}`)
}else{
    alert(`Intenta nuevamente para ganar, el numero era ${numeroSecreto}. Tu puntuacion es ${puntuacion}`)
}
// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 1000;
let mensaje = `Su saldo actual es: ${saldo} dólares`;
alert(mensaje);

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("Me indicas su nombre por favor:");
alert(`Bienvenido usuario: ${nombre}`);