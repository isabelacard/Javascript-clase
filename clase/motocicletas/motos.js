
let marca = prompt("Ingrese la marca de la motocicleta");
let precio = prompt("Ingrese el precio de la motocicleta");
let descuento = 0

if (marca == "Honda" || marca== "honda" || marca== "HONDA") {
    descuento = (precio * 5)/100;
} else if (marca="Yamaha" || marca== "yamaha" || marca== "YAMAHA") {
    descuento =  (precio * 8)/100;
} else if (marca="Suzuki" || marca== "suzuki" || marca== "SUZUKI"){
    descuento = (precio *10)/100;
} else {
    descuento = (precio * 2)/100;
}


let descuentoAplicado = precio * descuento
let precioFinal = precio - descuentoAplicado

console.log("Marca " + marca)
console.log("Precio: $"+ precio)
console.log("Descuento aplicado: %" + descuento * 100)
console.log ("Precio final: $ "+ precioFinal)