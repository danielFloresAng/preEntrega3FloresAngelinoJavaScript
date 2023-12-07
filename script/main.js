

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

  //actualizar la inversión
  let totalActualizado = historialDepositos.reduce((sum, deposito) => sum + deposito.cantidad, 0);

  inversionActual.innerHTML = totalActualizado

  localStorage.setItem("cantidadSumada", JSON.stringify(historialDepositos))

  ingresarCantidad.value = ""
  muestraHistorial()
}
)

let muestraHistorial = () => {
  contenedorHistorial.innerHTML = ""
  historialDepositos.forEach(function(deposito) {
    contenedorHistorial.innerHTML += `Cantidad: $${deposito.cantidad} - Fecha: ${deposito.fecha} <br>`
  });
}