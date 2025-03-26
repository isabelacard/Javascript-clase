
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let operador = prompt ("Ingrese operador /,+,-,*");
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;


if (isNaN(numero1) || isNaN(numero2)) {
    console.error("Uno de los dos valores no es un numero");
}else if (operador == "+") {
    resultado=numero1+numero2
} else if (operador == "-") {
    resultado=numero1-numero2
} else if (operador == "/") {
    resultado=numero1/numero2
} else if (operador == "*") {
    resultado=numero1*numero2
} else if (operador == "%") {
    resultado=numero1%numero2
}

console.log(resultado)