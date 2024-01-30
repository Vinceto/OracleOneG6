// Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundoPorConsola(msg) {
    console.log(msg);
}
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleDelNumero(numero) {
    console.log(`El doble de ${numero} es ${numero*2}`);
}
// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioDeTres(numero1, numero2, numero3) {
   return console.log(`El promedio entre el numero ${numero1}, ${numero2} y ${numero3} es ${(numero1 + numero2 + numero3 ) / 3}`);
}
// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(a, b) {
    let msg = false;
    if(a == b){
        msg = false;
    }else if(a > b){
        msg = a;
    }else{
        msg = b;
    }
    return console.log( (msg == false ) ? `${a} y ${b} son iguales` : `El mayor es ${msg}` );
}
// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroPorSiMismo(numero) {
    return console.log( `${numero} * ${numero} = ${numero*numero}` );
}

holaMundoPorConsola('¡Hola, mundo!');
mostrarNombre(prompt('Escribe un nombre:'));
dobleDelNumero(parseInt(prompt('Escribe un número y retornare el doble:')));
promedioDeTres(parseInt(prompt('Escribe el primer número:')),parseInt(prompt('Escribe el segundo número:')),parseInt(prompt('Escribe el tercer número:')));
numeroMayor(8, 8);
numeroPorSiMismo(15);