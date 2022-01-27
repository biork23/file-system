/**
 * Usando funciones asincronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile agregar una segunda linea
 * 3. Despues de 5 segundos eliminar el archivo (fs.unlink)
 */

 const fs = require('fs')


 function newFile () {
    fs.writeFile('hello.txt', 'Creando un archivo con texto nuevo', 'utf-8', (error) => {
        if(error){
            console.error('Error al crear el archivo')
            return
        }
        console.log('Se creo el archivo exitosamente')
        newLine()
        })
    }

function newLine () {
    fs.appendFile('hello.txt', '\n Hola koders', (error) => {
        if(error) {
            console.error('No se pudo agregar la linea')
            return
        }
        console.log('A new line was added successfuly')
        deleteFile()
    })
}

function deleteFile () {
    setTimeout( () => {
        fs.unlink('hello.txt', (error) => {
            if (error) {
                console.error('Error to delete file');
                return
            }
            console.log('The hello.txt file was deleted successfuly')
        })
    }, 5000)
}

newFile()


const filePath = 'voy-a-morir-js'

// paso 1
fs.writeFile(filePath, 'Hola! no me queda mucho tiempo', 'utf8', (error) => {
  if(error) {
    console.error('No se pudo crear el archivo')
    return
  }

  // paso 2
  fs.appendFile(filePath, 'Tengo algo importante que decirte...', (error) => {
    if (error) {
      console.error('No se pudo Agregar al archivo')
      return
    }

    // paso 3
    setTimeout(() => {
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('No se pudo borrar');
          return
        }
        console.log('Adios popo')
      })
    }, 5000)

  })

})