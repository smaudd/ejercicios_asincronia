/*
    [DIFICIL] Ejercicio bonus:

    Lee el CSV ubicado en /assets/users.csv

    Utilizando lo que necesites traduce el string del contenido a una estructura JSON como la siguiente

    [
        {
            "name": "Example",
            "email": "example@example.com"
            "phone": "555-555-5555",
            "address": "Example Address"
        },
        {
            "name": "Example 2",
            "email": "example2@example.com"
            "phone": "555-555-5551",
            "address": "Example 2 Address"
        }
    ]

    Imprime el resultado por consola

    HINT: Hay mil formas de resolver este ejercicio
    HINT: Cada vez que hay un salto de línea (salto de carro) \n hay una fila nueva
    HINT: Usa un array bidimensional
    HINT: https://www.geeksforgeeks.org/how-to-convert-csv-to-json-file-and-vice-versa-in-javascript/

*/

const fs = require('fs')
const path = require('path')
