//Crea un programa de cuenta progresivo. 
// Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numero = parseInt(prompt("Ingresa un número: "));

if (!isNaN(numero) && numero >= 0) {
    let contador = 0; 

    while (contador <= numero) {
        console.log(contador); 
        contador++; 
    }

    console.log("¡Cuenta regresiva completa!"); 
} else {
    console.log("Por favor, ingresa un número válido."); 
}
