"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Utilice la variable "ejercicio" para indicarle al script que ejercicio ejecutar,
de esta manera podrá ir realizando uno por uno los ejercicios sin que se ejecuten
todos juntos.

*/

// seleccione el ejercicio a ejecutar

let ejercicio = 0;

if (ejercicio == 0) {
    ejercicio = prompt(`Bienvenido, ingrese el número de ejercicio que quiere realizar`);
}

// Ejercicios de sintaxis de "for"
    //Descomentar cada bloque y encontrar el error de sintaxis :D
//     for (let i=0; i<10; i++){
//     console.log(`el valor de "i" es: ${i}`);
//     }
    
//   for (i=0; i <10; i++){
//      console.log(`el valor de "i" es: ${i}`);
//      }
    
//     for(i=0; 0<10; i++){
//     console.log(`el valor de "i" es: ${i}`);
//     }
    
//     for(i=0; i>10; i++){
//       console.log(`el valor de "i" es: ${i}`);
//     }
    
//    for(i=0; i<10; i++){
//          console.log(`el valor de "i" es: ${i}`);
//     }

// Ejercicios de práctica numérica con bucle for
if (ejercicio == 2) 
    // Realice un bucle que cuente de 0 al 9
    // En cada iteración del bucle imprimir en consola el número
    // o índice que irá incrementando
    // Utilice bucle "for"
    for (let i = 0; i<10; i++) {
    console.log(i)
}

// Ejercicios de práctica numérica con bucle for of
if (ejercicio == 3) {
    const arrayNumeros = [0, 1, 2, 3, 4, 5]
    for(let elemento of arrayNumeros) {
        console.log(elemento)
    }

    
    // Realice un bucle que recorra el array de numeros
    // y en cada iteración imprira en la consola el valor
    // del número recorrido
    // Utilice bucle "for of"
}

// Ejercicios de práctica de objetos con bucle for of
if (ejercicio == 4) {
    const arrayPersonas = [

        {
            "nombre": "Max",
            "apellido": "Power"
        },
        {
            "nombre": "Jean",
            "apellido": "Gray"
        },
        {
            "nombre": "Minerva",
            "apellido": "MacGonagall"
        }
    ];
    // Realice un bucle que recorra el array de objetos
    // personas.
    // En cada iteración imprimir el nombre de la persona.
    // Utilice bucle "for of"
    for(let lista of arrayPersonas) {
        console.log(lista)
    }

}

// Ejercicios de práctica de objetos con bucle for of
if (ejercicio == 5) {
    const arrayPersonass = []
    for(let i=0; i < 1; i++) {
        arrayPersonass.push(prompt(`Ingrese nombre`))
        arrayPersonass.push(prompt(`Ingrese apellido`))
    }console.log(arrayPersonass)
} 



    // Esta vez el array de personas comenzará vacio.
    // Realice un bucle que en cada iteración solicite
    // al usuario con prompt un nombre y apellido.
    // Utilizar el nombre y apellido para crear un objeto
    // y almacene ese objeto en el array "personas".
    // El bucle deberá ejecutarse por 2 iteraciones.
    // Al terminarse el bucle (luego de ejecutarse todas las iteraciones)
    // deberá imprimir en consola el contenido del array "personas"
