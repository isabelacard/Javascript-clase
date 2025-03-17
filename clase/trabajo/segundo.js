

let sueldo = prompt("Ingresa tu sueldo: ");
let descuento = 0;

if (sueldo <= 1000) {
    descuento = sueldo * 0.05;
}
else if (sueldo > 1000 && sueldo <= 2000) {
    descuento = (sueldo * 10)/100;
} 
else{
    descuento = (sueldo * 15)/100;
}

let sueldoNeto = sueldo - descuento;

//mostrar en consola el descuento y sueldo neto
console.log("sueldo Base:  " + sueldo);
console.log("Descuento de $:  " + descuento   );
console.log("Sueldo Neto es de $:  " + sueldoNeto);