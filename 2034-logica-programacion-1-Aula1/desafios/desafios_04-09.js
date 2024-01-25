// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("bienvenido")
// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Pedro";
console.log(`Hola ${nombre}.`);
// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre2 = "Pedro";
alert(`Hola ${nombre2}.`);
// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajeProgramacion = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`Asi que te gusta programar en ${lenguajeProgramacion}, sape!`);
// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 1;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor11 = 1;
let valor22 = 2;
let resultado2 = valor11 - valor22;
console.log(`La diferencia de ${valor11} y ${valor22} es igual a ${resultado2}.`);
// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt("ingrese su edad:");
if(edad > 18){
    console.log(`Con ${edad} año(s) ya eres mayor de edad.`);
}else{
    console.log(`Con ${edad} año(s) eres menor de edad.`);
}
// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = parseInt(prompt("ingrese un numero"));
let parImpar ="";
if( numero == 0){
    parImpar=`El número es ${numero}`;
}else if(numero %2 === 0){
    parImpar=`El número ${numero} es par`;
}else{
    parImpar=`El número ${numero} es impar`;
}
console.log(`${parImpar}.`);
// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let veces = 1;
while(veces < 11){
    console.log(`${veces}.`);
    veces++;
}
// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 6;
if(nota >= 7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}
// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.floor(Math.random());
console.log(`El número aleatorio es ${numeroAleatorio}.`);
// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(`El número aleatorio entre 1 y 10 es ${numeroAleatorio2}.`);
// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(`El número aleatorio entre 1 y 1000 es ${numeroAleatorio3}.`);