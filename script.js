function enviarWhatsApp(categoria) {
  const numero = "59892419330";
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
