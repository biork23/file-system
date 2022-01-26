

/**
 * Construir un muro
 * -Construir
 * -Aplanar
 * -Pintar
 */

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
  
  function construir (unMuro, unaFuncion) {
    setTimeout(() => {
      unMuro.construido = true
      unaFuncion(null, unMuro)
    }, 2000)
  }
  
  function aplanar (unMuroConstruido) {
    unMuroConstruido.aplanado = true
    return unMuroConstruido
  }
  
  function pintar (unMuroAplanado) {
    unMuroAplanado.pintado = true
    return unMuroAplanado
  }
  
  construir({ ...muro }, (error, muroConstruido) => {
    console.log('muro construido', muroConstruido)
    
  
    pintar(muroConstruido)
  })



/**
 * Usando funciones asincronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile agregar una segunda linea
 * 3. Despues de 5 segundos eliminar el archivo (fs.unlink)
 */