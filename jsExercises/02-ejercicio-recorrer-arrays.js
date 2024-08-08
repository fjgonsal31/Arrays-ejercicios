// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Creamos un array de números
let numeros = [0, 1, 2, 3, 4, 5];

// 2. Recorremos el array con un bucle for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// 3. Recorremos el array con forEach
numeros.forEach(element => {
    console.log(element);
});

// 4. Calculamos la suma de los números usando for
let num = 0;

for (let i = 0; i < numeros.length; i++) {
    num += numeros[i];
}

console.log(num);

// 5. Calculamos la suma de los números usando forEach
num = 0;

numeros.forEach(element => {
    num += element;
});

// num = 1;
// numeros.shift();
// console.log(numeros);
// numeros.forEach(element => {
//     num = num * element;
// });

console.log(num);

// 6. Creamos un nuevo array con los números pares usando for
let numerosPares = [];

for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        numerosPares.push(i);
    }
}
console.log(numerosPares);

// 7. Creamos un nuevo array con los números pares usando forEach
numerosPares = [];
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.forEach(element => {
    if (element % 2 == 0) {
        numerosPares.push(element);
    }
});

console.log(numerosPares);

console.log("----------------------------");