// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion" los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Función para mostrar todos los elementos de la lista "lenguajesDeProgramacion".
function mostrarLenguajes() {
    console.log("Lenguajes de programación:");
    console.log(lenguajesDeProgramacion);
}

// Función para mostrar todos los elementos de la lista "lenguajesDeProgramacion" en orden inverso.
function mostrarLenguajesInverso() {
    console.log("Lenguajes de programación en orden inverso:");
    console.log(lenguajesDeProgramacion.reverse());
}

// Función que calcula el promedio de los elementos en una lista de números.
function calcularPromedio(numeros) {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    return suma / numeros.length;
}

// Función que muestra el número más grande y el más pequeño en una lista.
function mostrarMaxMin(numeros) {
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);
    console.log("Número más grande:", maximo);
    console.log("Número más pequeño:", minimo);
}

// Función que devuelve la suma de todos los elementos en una lista.
function sumarElementos(numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

// Función que devuelve la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarPosicion(lista, elemento) {
    return lista.indexOf(elemento);
}

// Función que suma los elementos uno a uno de dos listas de números del mismo tamaño.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        return "Las listas deben ser del mismo tamaño";
    }
    return lista1.map((valor, indice) => valor + lista2[indice]);
}

// Función que devuelve una nueva lista con el cuadrado de cada número.
function cuadradoDeCadaNumero(numeros) {
    return numeros.map(numero => numero * numero);
}

// Ejemplos de uso de las funciones
mostrarLenguajes();
mostrarLenguajesInverso();
console.log("Promedio de [1, 2, 3, 4, 5]:", calcularPromedio([1, 2, 3, 4, 5]));
mostrarMaxMin([10, 5, 20, 8, 15]);
console.log("Suma de [1, 2, 3, 4, 5]:", sumarElementos([1, 2, 3, 4, 5]));
console.log("Posición de 'Kotlin' en la lista:", encontrarPosicion(lenguajesDeProgramacion, 'Kotlin'));
console.log("Suma de listas:", sumarListas([1, 2, 3], [4, 5, 6]));
console.log("Cuadrados de [1, 2, 3, 4, 5]:", cuadradoDeCadaNumero([1, 2, 3, 4, 5]));