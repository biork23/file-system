//resolve -> es una funcion que vamos a ejecutar cuandpo la promesa de pasar de pendiente a resuelta
//reject -> es una funcion que vamos a ejecutar cuando la promesa debe pasar de pendiente a rechazar
//la promesa creada (objeto) tendra dos metodos: then y catch
//El then se ejecuta cuando la promesa se resuelve
//El catch se ejecuta cuando la promesa se rechaza

/**
 * Construir un muro
 * -Construir
 * -Aplanar
 * -Pintar
 */

const { resolve } = require("path/posix")

// const muro = {
//     construido: false,
//     aplanado: false,
//     pintado: false
// }

// function construir (unMuro) {
//     unMuro.construido = true
//     return unMuro
// }



// function aplanar(unMuroConstruido) {
//     unMuroConstruido.aplanado = true
//     return unMuroConstruido
// }
// function pintar (unMuroAplanado) {
//     unMuroAplanado.pintado = true
//     return unMuroAplanado
// }
// const muroConstruido = construir(muro)
// const muroAplanado = aplanar(muroConstruido)
// const muroPintado = pintar(muroAplanado)
// console.log('muroPintado:', muroPintado)

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
 function construir (unMuro) {   return new Promise((resolve, reject)=> {
     setTimeout(() => {
       unMuro.construido = true

       if (!unMuro.construido) {
         reject(new Error('No se pudo construir'))
         return
      
       }
       resolve(unMuro)
     }, 2000)
   })
 }


   function aplanar (unMuro) {
     return new Promise((resolve, reject) => {
       setTimeout(()=> {
         unMuro.aplanado = true
         if (!unMuro.aplanado) {
           reject(new Error('No se pudo aplanar'))
           return
        
         }
         resolve(unMuro)

       }, 2000)
     })
   }

   function pintar (unMuro) {     return new Promise((resolve, reject) => {
       setTimeout(()=> {
         unMuro.pintado = true       
           if (!unMuro.aplanado) {        
               reject(new Error('No se pudo aplanar'))
           return
        
         }
         resolve(unMuro)
       }, 2000)
     })
   }
  
  
  
//   construir(muro)
//   .then((muroConstruido) => {
//     console.log('muroConstruido:', muroConstruido)
//     aplanar(muroConstruido)
//     .then((muroAplanado)=>{
//       console.log('muroAplanado:', muroAplanado)
//       pintar(muroAplanado)
//       .then((muroPintado)=> {
//         console.log('muroPintado:', muroPintado)
//       })
//       .catch((error)=>{
//         console.error('ERRO: ', error)
//       })
//     })
//     .catch((error)=>{
//       console.error('ERRO: ', error)
//     })
//   })
//   .catch((error)=>{
//     console.error('ERRO: ', error)
//   })

//Promesas
//new Promise((resolve, reject)=>{

//})


//async await

//async -> palabra reservada que ocupamos para marcar una funcion asincrona,( toda aquella que usa await internamente)
//await -> palabra reservada que usaremos para esperar la resolucion de una preomesa

// async function principal () {
//   const muroConstruido = await construir(muro)
//   const muroAplanado = await aplanar(muroConstruido)
//   const muroPintado = await pintar(muroAplanado)
//   console.log('muroPintado: ', muroPintado)
// }

// principal()
// .then(()=> {
//   console.log('FIN')
// })
// .catch((error)=>{
//   console.error('ERROR:', error)
// })

/**
 * Usando funciones asicronas de promesas (fsPromises)
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */



 const fs = require('fs/promises')

 const file = 'texto.txt'
 const filePath = 'text-async-await.txt'
 
 // then y catch
 fs.writeFile(file, 'hola desde archivo', 'utf8')
   .then(() => {
     console.log('Archivo creado')
     fs.appendFile(file, '\nLinea nueva', 'utf8')
       .then(() => {
         console.log('Linea agregada')
         setTimeout(() => {
          fs.unlink(file)
            .then(()=> {
              console.log('Archivo borrado')
            })
        }, 5000)
            
       })
   })
   .catch(error => {
     console.error('ERROR: ', error)
   })
 
 // async await
 async function main () {
   await fs.writeFile(filePath, 'ejemplo async await', 'utf8')
   await fs.appendFile(filePath, 'nuea linea', 'utf8')
   await setTimeout(()=>{
     fs.unlink(filePath)
   },5000)
 }
 
 main()
   .then(() => {
     console.log('FIN (Async await)')
   })