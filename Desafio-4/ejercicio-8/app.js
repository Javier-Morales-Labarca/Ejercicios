//Crea una variable "numero" y solicita un valor con prompt. 
// Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let pregunta = parseFloat(prompt("Digita un número: ")); 
    if (pregunta >0) {
        console.log("El número es positivo");
    } else if (pregunta <0) {
        console.log("El número es negativo");
    }   else {
        console.log("El número es cero");
    
}