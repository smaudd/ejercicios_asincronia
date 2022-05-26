/*
    1.- Crea una función que permita ejecutar otra función de forma asíncrona después de pasados X milisegundos

        La función recibe dos parametros a y b.
            a: Cantidad de milisegundos a esperar para ejecutar la siguiente función
            b: Funcion a ejecutar después de haber pasado la cantidad de milisegundos indicada

        Estructura de ejemplo:
            function timer(a, b) {

            }

        HINT: Usa setTiemout para programar ejecuciones en el futuro.

    2.- Utilizando el módulo fs de Node.js, lee el documento CSV que se encuentra en /assets/users.csv e imprime por consola su contenido.

        HINT: Necesitarás el método readFile de fs para realizar este ejercicio
        HINT: Aprovecha las variable global __dirname
        HINT: Recuerda usar el módulo path para resolver correctamente las rutas del sistema para que las puedas escribir de forma agnostica al sistema operativo

    3.- Utilizando el módulo fs de Node.js, crea un documento JSON en la carpeta /assets/ con nombre data.json y el siguiente objeto como contenido:

            {
                "ES": "001",
                "IT": "005"
            }

        HINT: Necesitarás el método writeFile de fs para realizar este ejercicio
        HINT: Solo puedes escribir strings en documentos, ten en cuenta que tendrás que transformar el objeto indicado a string (JSON.stringify)
        HINT: Aprovecha las variable global __dirname
        HINT: Recuerda usar el módulo path para resolver correctamente las rutas del sistema para que las puedas escribir de forma agnostica al sistema operativo
*/

// 1
function timer(a, b) {

}


// 2
const fs = require('fs')
const path = require('path')


// 3 (Necesitas el require de fs y path una sola vez por documento)