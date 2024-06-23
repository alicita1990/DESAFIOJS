// Mapeo de teclas a colores
const keyToColor = {
  a: "pink",
  s: "orange",
  d: "lightblue",
  q: "purple",
  w: "gray",
  e: "brown",
};

// Función para cambiar el color del div con id "key"
function cambiarColor(event) {
  const color = keyToColor[event.key];
  if (color) {
    if (event.key === "a" || event.key === "s" || event.key === "d") {
      document.getElementById("key").style.backgroundColor = color;
    } else if (event.key === "q" || event.key === "w" || event.key === "e") {
      const nuevoDiv = document.createElement("div");
      nuevoDiv.className = "color-box";
      nuevoDiv.style.backgroundColor = color;
      document.body.appendChild(nuevoDiv);
    }
  }
}

// Agregar el evento keydown al documento
document.addEventListener("keydown", cambiarColor);
