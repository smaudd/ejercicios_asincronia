/*
    5.- Usa el módulo externo "axios" para hacer peticiones HTTP a la siguiente API:
    https://swapi.dev/api/people

    La API retorna algunos personajes de la franquicia Star Wars

    Guarda la respuesta de la petición usando fs.writeFile de forma asíncrona con promesas en un documento json starwars.json (transforma el método con promisify).

    Encapsula todo en una función async/await
*/

const axios = require('axios').default
const fs = require('fs')
const path = require('path')

async function startWars() {

}

startWars()