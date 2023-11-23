let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;

  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalElemento = document.getElementById('total');

  // Limpiar la lista del carrito
  listaCarrito.innerHTML = '';

  // Actualizar la lista del carrito
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.producto} - $${item.precio}`;
    listaCarrito.appendChild(li);
  });

  // Actualizar el total
  totalElemento.textContent = total;
}
