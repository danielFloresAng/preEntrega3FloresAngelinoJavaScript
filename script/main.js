

// Input
let ingresarCantidad = document.getElementById("ingresarCantidad")

//botón
let botonActualizarInversion = document.getElementById("botonActualizarInversion")

let inversionActual = document.getElementById("inversionActual")

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
    cantidad: cantidadIngresada,
    fecha: new Date().toLocaleString
  }
  inversionActual.innerHTML = historial.cantidad 

  localStorage.setItem("cantidadSumada", JSON.stringify(historial))

  ingresarCantidad.value = ""
}
)
// console.log(botonActualizarInversion)