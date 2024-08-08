// Ejercicio: Manejo de objetos en JavaScript

// 1. Creamos un objeto que representa a un estudiante
let student = {
    nombre: "Pepe",
    edad: 18,
    curso: "2º Bachillerato"
}

// 2. Accedemos y mostramos propiedades del objeto
console.log(student.nombre);

// 3. Modificamos una propiedad
student.edad = 34;
console.log(student);

// 4. Añadimos una nueva propiedad
student.pais = "España";
console.log(student);

// 5. Recorremos las propiedades del objeto con for...in
for (const key in student) {
    console.log(key);
}

// 6. Creamos un método en el objeto
student.presentacion = function () {
    return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años, estoy en ${this.curso} y soy de ${this.pais}.`;
}

// 7. Llamamos al método
console.log(student.presentacion());

// 8. Creamos un array de objetos
student.asignaturas = ["lengua", "matemáticas", "inglés", "informática"];

// 9. Recorremos el array de objetos
for (let i = 0; i < student.asignaturas.length; i++) {
    console.log(student.asignaturas[i]);
}

// 10. Buscamos un estudiante por su nombre
console.log(student.nombre.includes("Pepe"));

console.log("----------------------------");