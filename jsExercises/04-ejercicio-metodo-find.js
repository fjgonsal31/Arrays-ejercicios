// Ejercicio: Uso del método find en JavaScript

// 1. Creamos un array de objetos que representan libros
let libros = [
    { id: 1, nombre: "Libro1", autor: "Pepe", fechaPublicacion: 1990 },
    { id: 2, nombre: "Libro2", autor: "Juan", fechaPublicacion: 1995 },
    { id: 3, nombre: "Libro3", autor: "Pepe", fechaPublicacion: 2000 }
];

// 2. Función para encontrar un libro por su ID
function findLibro(num) {
    return libros.find(element => element.id == num);
}

console.log(findLibro(1));

// 3. Función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)
function findLibro2(title) {
    return libros.find(element => element.nombre.toLowerCase() == title.toLowerCase());
}

console.log(findLibro2("LIBro2"));

// 4. Función para encontrar el primer libro de un autor específico
function findLibro3(autor) {
    return libros.find(element => element.autor.includes(autor));
}

console.log(findLibro3("Pepe"));

// 5. Función para encontrar el primer libro publicado después de un año específico
function findLibro4(fecha) {
    return libros.find(element => element.fechaPublicacion >= fecha);
}

console.log(findLibro4(1996));

// 6. Función para encontrar un libro que cumpla múltiples criterios
function findLibro5(autor, fecha) {
    return libros.find(element => element.autor == autor && element.fechaPublicacion >= fecha);
}

console.log(findLibro5("Pepe", 1990));

// 7. Intentar encontrar un libro que no existe
function findLibro6(title) {
    return libros.find(element => element.title == title);
}

console.log(findLibro6("hola"));

console.log("----------------------------");