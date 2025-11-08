function enviarWhatsApp(categoria) {
  const numero = "59896405284";
  const mensaje = `¡Hola! Me gustaría recibir más información sobre la categoría ${categoria}. Estoy considerando realizar una compra.`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function moverCarrusel(id, direccion) {
  const cont = document.getElementById(`carrusel-${id}`);
  if (!cont) return;

  const slideWidth = cont.children[0]?.offsetWidth || 250;
  cont.scrollBy({
    left: direccion * (slideWidth + 15),
    behavior: 'smooth'
  });
}


function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.getElementById("menu-btn");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  // Oculta el botón mientras el menú esté visible
  if (sidebar.classList.contains("active")) {
    menuBtn.classList.add("hidden");
  } else {
    menuBtn.classList.remove("hidden");
  }
}

function closeMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.getElementById("menu-btn");

  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuBtn.classList.remove("hidden");
}

// Mostrar botón al hacer scroll
window.addEventListener("scroll", () => {
  const btn = document.getElementById("btnSubir");
  if (window.scrollY > 400) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

// Subir al inicio con scroll suave
document.getElementById("btnSubir").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

