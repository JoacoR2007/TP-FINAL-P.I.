document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addToCartBtn");

  if (addBtn) {
    addBtn.addEventListener("click", () => {
      addBtn.classList.add("added");

      const producto = {
        nombre: "NeuroHeadset",
        precio: 149.99
      };

      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));

      setTimeout(() => addBtn.classList.remove("added"), 600);
    });
  }

  // alerta en formulario de contacto
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensaje enviado ✅");
      contactForm.reset();
    });
  }
});

