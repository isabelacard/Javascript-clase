

let calificacion1 = parseInt(prompt("Ingrese la primera calificacion"));
let calificacion2 = parseInt(prompt("Ingrese la segunda calificacion"));
let calificacion3 = parseInt(prompt("Ingrese la tercera calificacion"));
let calificacion4 = parseInt(prompt("Ingrese la cuarta calificacion"));
let calificacion5 = parseInt(prompt("Ingrese la quinta calificacion"));

let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5)/5;

console.log(promedio);

if (promedio >= 3) {
    console.log("El estudiante aprobo");
} else {
    console.log("El estudiante reprobo");
}
