function enviarWhatsApp(categoria) {
  const numero = "59892419330"; // <-- tu número real
  const mensaje = `Hola! Estoy interesado en los conejos de la categoría: ${categoria}. ¿Podrías darme más información?`;
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
