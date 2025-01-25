// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
// De lo contrario, muestra "¡Buena semana!".//Variables

let diaFestivo1 = "Sábado";
let diaFestivo2 = "Domingo";
let preguntaDia = prompt("Qué día es Hoy?");


/*
Este código realiza
la comparación
*/
if (preguntaDia == diaFestivo1 || preguntaDia == diaFestivo2) {
    //Acertamos, fue verdadera la condición
    alert("Buen fin semana!");
} else {

    //La condición no se cumplió
    alert("Buena semena!");
}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let ingreseNumero = (prompt("Ingrese un número"));

if (ingreseNumero >= 0){
alert("El número es positivo");

} 
else{
    alert("El número es negativo")
}

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
// muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntaje = 100;
let adivinaPuntaje = prompt("Ingresa tu puntaje");

if (adivinaPuntaje >= 100) {
    alert("Felicidades, has ganado!");

} else {
    alert("Intentalo nuevamente para ganar");
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldoCuenta = 5000; 
alert(`El saldo de su cuenta es: ${saldoCuenta}`);

//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt("Ingresa tu nombre");
    alert(`Bienvenido ${nombre}`);