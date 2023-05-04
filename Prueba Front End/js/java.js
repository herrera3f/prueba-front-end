// Obtener referencias a los elementos HTML
const nombreInput = document.getElementById("nombreProducto");
const descripcionInput = document.getElementById("descripcionProducto");
const valorInput = document.getElementById("valorProducto");
const listaProductos = document.getElementById("listaProductos");

// Función para agregar un producto a la lista
function agregarProducto() {
  // Obtener el valor de los campos de entrada
  const nombreProducto = nombreInput.value;
  const descripcionProducto = descripcionInput.value;
  const valorProducto = valorInput.value;
  
  // Crear un elemento de lista para mostrar la información del producto
  const producto = document.createElement("li");
  producto.textContent = `${nombreProducto}: ${descripcionProducto} - $${valorProducto}`;
  
  // Agregar el elemento de lista a la lista de productos
  listaProductos.appendChild(producto);
  
  // Limpiar los campos de entrada
  nombreInput.value = "";
  descripcionInput.value = "";
  valorInput.value = "";
}