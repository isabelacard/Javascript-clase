let figura = prompt("2 = calcular dimension de circulo 3 = calcular dimension de esfera")

if (figura == "2") {
    let radio = parseInt(prompt("Ingrese el radio del circulo"));
    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, ingrese un valor válido para el radio.");
    } else {
        let areacirculo = Math.PI * Math.pow(radio, 2);
        alert(`El área del círculo es: ${areacirculo.toFixed(2)}`);
    }
} else if (figura == "3") {
    let radio = parseInt(prompt("Ingrese el radio de la esfera"));
    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, ingrese un valor válido para el radio.");
    } else {
        let areaesfera = 4 * Math.PI * Math.pow(radio, 2);
        alert(`El área superficial de la esfera es: ${areaesfera.toFixed(2)}`);
    }
} 
else {
    alert ("Opcion no valida, ingrese 2 o 3")
}