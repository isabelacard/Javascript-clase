const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Pedir al usuario que adivine el número
let intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));

// Verificar si el usuario adivinó correctamente
if (intento === numeroAleatorio) {
    alert("¡Felicidades! Adivinaste el número.");
} else {
    alert(`Lo siento, el número era ${numeroAleatorio}. ¡Intenta de nuevo!`);
}