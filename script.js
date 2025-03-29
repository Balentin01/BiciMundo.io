
function agregarAlCarrito(nombre, precio) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const productoExistente = carrito.find(p => p.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${nombre} ha sido agregado al carrito.`);
}

// Detectar clicks en botones de compra
document.addEventListener("DOMContentLoaded", () => {
  const botonesComprar = document.querySelectorAll(".btn-comprar");
  botonesComprar.forEach(boton => {
    boton.addEventListener("click", () => {
      const card = boton.closest(".producto");
      const nombre = card.querySelector("h3").textContent;
      const precio = parseFloat(card.querySelector("p").textContent.replace("RD$", ""));
      agregarAlCarrito(nombre, precio);
    });
  });
});
