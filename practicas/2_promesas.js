/*
    1.- Refactoriza el ejercicio anterior del timer para ser escrito con promesas

    2.- Refactoriza el ejercicio anterior para leer el documento CSV en /assets/users.csv usando la utilidad de promisify de Node.js

    3.- Refactoriza el ejercicio anterior para escribir el documento ghibli.json en /assets/ usando la utilidad de promisify de Node.js

    HINT: Aprovecha las variable global __dirname

    4.- Usa el módulo externo "axios" para hacer peticiones HTTP a la siguiente API:
        https://ghibliapi.herokuapp.com/films

        La API retorna todas las películas del Estudio Ghibli en formato JSON.

        Guarda la respuesta de la petición usando fs.writeFile de forma asíncrona con promesas (transforma el método con promisify).

    5.- [OPCIONAL] Crea una función donde refactorices fs.readFile para que retorne una promesa usando un callback sin usar la utilidad promisify

    6.- [OPCIONAL] Crea una función donde refactorices fs.writeFile para que retorne una promesa usando un callback sin usar la utilidad promisify

*/

// 1
function timer(a, b) {

}


// 2
const fs = require('fs')
const path = require('path')

// Usa promisify

// 3 (Necesitas el require de fs y path una sola vez por documento)

// 4
const axios = require('axios').default


