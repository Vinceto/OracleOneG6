// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function imc(altura, peso) {
    return peso / (altura * altura);
}
// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function dolaresAReales(dolares) {
    const cotizacionDolar = 4.80;
    return dolares * cotizacionDolar;
}
// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function salaRectangular(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function salaCircular(radio) {
    const area = Math.PI * radio * radio;
    const perimetro = 2 * Math.PI * radio;
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

console.log("IMC:", imc(1.75, 70));
console.log("Factorial de 5:", factorial(5));
console.log("$100 en reales:", dolaresAReales(100));
salaRectangular(5, 10);
salaCircular(3);
tablaMultiplicar(7);