
let pizza = prompt("Sabor de preferencia")
let tamaño = prompt ("Tamaño de pizza")
let bebida = prompt ("Deseas bebida?")
let sabor = prompt ("Ingresa sabor de bebida")

alert(`${pizza} ${tamaño} ${bebida} ${sabor}`);

// Confirmar el pedido
let confirmacion = confirm("¿Desea confirmar su pedido?");
if (confirmacion) {
    alert("¡Pedido registrado correctamente! Gracias por su compra.");
} else {
    alert("Pedido Cancelado!");
}