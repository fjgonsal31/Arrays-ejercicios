// Ejercicio: Uso del método map en JavaScript

// 1. Creamos un array de números
let numeros2 = [1.20, 2.30, 3.40, 4.50, 5.60];

// 2. Utilizamos map para duplicar cada número
let cpNumeros = numeros2.map(element => element);
console.log(cpNumeros);

// 3. Creamos un array de objetos que representan productos
let productos = [
    { precio: 10, nombre: "galletas" },
    { precio: 20, nombre: "bizcochos" },
    { precio: 30, nombre: "napolitanas" },
    { precio: 40, nombre: "palmeras" }
];

// 4. Utilizamos map para crear un array solo con los nombres de los productos
let arrayProductos = productos.map(element => element.nombre);

console.log(arrayProductos);

// 5. Utilizamos map para aplicar un descuento del 10% a todos los productos
let descuento = productos.map(element => element.precio - (element.precio * 0.1));

console.log(descuento);

// 6. Creamos un array de strings con nombres
let nombres = ["fran", "pepe", "miguel"];

// 7. Utilizamos map para capitalizar la primera letra de cada nombre
let capNombres = nombres.map(element => element.charAt(0).toUpperCase() + element.slice(1));

console.log(capNombres);

// 8. Creamos una función que formatea un número como moneda
const formatoMoneda = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
});

function numToMoney(num) {
    return formatoMoneda.format(num);
}

console.log(numToMoney(123.45));

// 9. Utilizamos map con la función formatearComoMoneda
let money = numeros2.map(element => numToMoney(element));

console.log(money);
// 10. Utilizamos map con el índice del elemento
let index = productos.map((element, index) => { return `${index}, ${element.nombre}` });

console.log(index);