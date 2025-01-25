/*Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/

let nota = parseFloat(prompt("Ingrese nota: "));
    alert(nota)
    if (nota >= 7) {
        console.log(`Aprobado con nota: ${nota}`); 
    } else 
            console.log(`Reprobado con nota: ${nota}`); 
    