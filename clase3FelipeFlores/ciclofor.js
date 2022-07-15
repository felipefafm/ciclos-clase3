// > Consigna: Tomando como base los ejemplos anteriores de la estructura for y while, crear un
// algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una
// operación o comparación para obtener una salida por alerta o consola.
// 
// CREAR UN ALGORITMO UTILIZANDO UN CICLO
// >>Ejemplo:
// - Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una
// salida por cada resultado.
// - Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida
// por cada resultado, hasta que se ingresa “ESC”.
// - Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces
// ingresada.


let num= parseInt(prompt("ingrese un numero:"));

for (let i = 0; i <5 ; i++) {
    console.log(num+"+"+ (num2=parseInt(prompt("ingrese un numero"))));
    console.log((num+num2));
    let resultado= (num+num2)
    if (resultado>20) {
        console.log("este numero es mayor que 20");
    }if (resultado<0) {
        console.log("este numero es negativo");
    } else {
        
    }

}


