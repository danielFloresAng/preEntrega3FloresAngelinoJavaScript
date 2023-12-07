

// Cantidad ingresada por el usuario
let ingresarCantidad = document.getElementById("ingresarCantidad")

let botonActualizarInversion = document.getElementById("botonActualizarInversion")

// inversión actualizada 
let inversionActual = document.getElementById("inversionActual")

//Historial de depósitos
let contenedorHistorial = document.getElementById("contenedorHistorial")
let historialDepositos = []

//valores en el STORAGE
window.onload = function() {
  let nuevaCantidad = localStorage.getItem("cantidadSumada")
  if(nuevaCantidad) {
    let cantidadAsumar = JSON.parse(nuevaCantidad)
    inversionActual.innerHTML = cantidadAsumar.cantidad 
  }
}



// función principal, se toma la cantidad del usuario y se agrega al total
botonActualizarInversion.addEventListener("click", function () {
  let cantidadIngresada = ingresarCantidad.value

  let historial = {
    cantidad: parseInt(cantidadIngresada),
    fecha: new Date().toLocaleString()
  }

  historialDepositos.push(historial)

  inversionActual.innerHTML = parseInt(historial.cantidad) 
  // contenedorHistorial.innerHTML = `Cantidad: $${historial.cantidad} - Fecha: ${historial.fecha}`

  localStorage.setItem("cantidadSumada", JSON.stringify(historialDepositos))

  ingresarCantidad.value = ""
  muestraHistorial()
}
)



let muestraHistorial = () => {
  historialDepositos.forEach(function(cantidad) 
  {
    contenedorHistorial.innerHTML += `Cantidad: $${cantidad.cantidad} - Fecha: ${cantidad.fecha} <br>`
  })
}

