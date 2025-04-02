
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

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu ul li a"); // Seleccionamos los enlaces

  // Función para abrir el menú
  menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active"); // Alterna entre mostrar y ocultar
  });

  // Función para cerrar el menú al hacer clic en "X"
  closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
  });

  // Cerrar el menú al hacer clic en cualquier enlace dentro de él
  menuLinks.forEach(link => {
      link.addEventListener("click", () => {
          mobileMenu.classList.remove("active");
      });
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          mobileMenu.classList.remove("active");
      }
  });

  // Asegurarse de que el menú principal sea manejado también
  const mainMenu = document.querySelector('.main-menu');
  
  // Alternar la clase 'active' para el menú principal
  menuToggle.addEventListener('click', () => {
      mainMenu.classList.toggle('active');
  });
});

function adjustIcons() {
  let screenWidth = window.innerWidth;
  
  document.querySelectorAll(".hide-on-mobile").forEach(el => {
      if (screenWidth <= 768) {
          el.style.display = "none";
      } else {
          el.style.display = "inline";
      }
  });
}

// Ejecutar al cargar la página y al redimensionar
window.addEventListener("load", adjustIcons);
window.addEventListener("resize", adjustIcons);

// Selecciona los elementos del menú
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

// Al hacer clic en el botón hamburguesa, muestra el menú
menuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
});

//chatbot
   // Botón de abrir/cerrar chatbot
   document.getElementById("chatbot-toggle").onclick = function() {
    let chatbot = document.getElementById("chatbot-container");
    chatbot.style.display = (chatbot.style.display === "block") ? "none" : "block";
};

// Botón de cerrar chatbot
document.getElementById("chatbot-close").onclick = function() {
    document.getElementById("chatbot-container").style.display = "none";
};

// Función para enviar mensaje
function sendMessage(option) {
    let response = "";
    if (option === "Productos") response = "Vendemos Biciletas y accesorios para bicicletas. ";
    if (option === "Precios") response = "Nuestros precios varían entre RD$27,800 y RD$58,900.";
    if (option === "Horarios") response = "Estamos abiertos de Lunes a Viernes de 9 AM a 6 PM.";
    if (option === "Ubicación") response = "Estamos ubicados en la Avenida 27 de Febrero, Santo Domingo.";
    if (option === "Métodos de pago") response = "Aceptamos tarjetas de crédito, débito y efectivo.";
    if (option === "Mas") response = "Si pasas por nuestra local puede alquilar una bicicleta tambien";

    let chatbox = document.getElementById("chatbot-messages");
    
    // Agregar mensaje del usuario
    chatbox.innerHTML += `<p class="chatbot-message user-message">${option}</p>`;
    
    // Agregar respuesta del chatbot
    setTimeout(() => {
        chatbox.innerHTML += `<p class="chatbot-message">${response}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight; // Desplazar al final
    }, 500);
}