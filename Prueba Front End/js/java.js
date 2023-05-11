
document.querySelector('form').addEventListener('submit', agregarProducto);

function agregarProducto(producto) {
  producto.preventDefault();
  const id = document.querySelector('#id').value;
  const nombre = document.querySelector('#nombre').value;
  const cantidad = document.querySelector('#cantidad').value;
  const precio = document.querySelector('#precio').value;
  const imagen = document.querySelector('#imagen').value;
  
  const formData = new FormData();
  formData.append('id', id);
  formData.append('nombre', nombre);
  formData.append('cantidad', cantidad);
  formData.append('precio', precio);
  formData.append('imagen', imagen);
  
  fetch('https://g9cd7530b8a8613-ecommerce.adb.sa-santiago-1.oraclecloudapps.com/ords/inacap_ecommerce/productos_brandon/', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}