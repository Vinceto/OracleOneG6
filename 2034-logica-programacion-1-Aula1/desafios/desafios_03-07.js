// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while(contador < 11){
 console.log(`El contador va en ${contador}.`);
 contador++;
}
// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;
while(contador2 > -1){
 console.log(`El contador va en ${contador2}.`);
 contador2--;
}
// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let suma = 0;
let numero = prompt("Me indicas un número por favor para hacer sumas hasta llegar a dicho número");
while(suma < numero){
 console.log(`El suma va en ${suma}.`);
 //aclaracion: prompt recibe un parametro pero aunque se ingrese un numero este es interpretado como texto y si intento sumar  va a concatenar, para evitar esto uso parseInt que convierte el valor capturado a uno de tipo entero de base 10 y asi puedo operar como si fuera una suma40
 suma = suma + parseInt(prompt("¿Qué número debo sumar ahora? :"), 10);
}
console.log(`El valor final es ${suma}.`);