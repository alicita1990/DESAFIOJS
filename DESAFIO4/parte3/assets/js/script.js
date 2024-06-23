function cambiarColorANegro(event) {
  event.target.style.backgroundColor = "black";
}

// Obtener los divs por su ID
const divAzul = document.getElementById("divAzul");
const divRojo = document.getElementById("divRojo");
const divVerde = document.getElementById("divVerde");
const divAmarillo = document.getElementById("divAmarillo");

// Agregar event listeners a cada div
divAzul.addEventListener("click", cambiarColorANegro);
divRojo.addEventListener("click", cambiarColorANegro);
divVerde.addEventListener("click", cambiarColorANegro);
divAmarillo.addEventListener("click", cambiarColorANegro);
