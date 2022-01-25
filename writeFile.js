

// const fs = require('fs')

// function atTheEnd(error) {
//     if (error){
//         console.error('Hubo un error al crear el archivo', error)
//         return
//     }
//     console.log('El archivo fue escrito exitosamente')
// }

// fs.writeFile('hola.txt', 'Hola a todos desde el nuevo archivo', 'utf8', atTheEnd)

// //Falsy
// // representan el vacio o la nada
// false
// 0
// ''
// null
// undefined
// NaN

// //truthy
// //representan un valor
// 1
// -1
// 'rrr'
// []
// {}

// if (false) {
//     console.log('Es truthy')
// }

const fs = require('fs')


 function dataToAppend(error) {
     if (error){
         console.error('Hubo un error al agregar la data', error)
         return
     }
     console.log('Se agrego correctamente')
 }

fs.appendFile('hola.txt', '\nHola otra vez', dataToAppend) 

