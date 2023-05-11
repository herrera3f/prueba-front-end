window.addEventListener("load", () => {

    fetch('https://g9cd7530b8a8613-ecommerce.adb.sa-santiago-1.oraclecloudapps.com/ords/inacap_ecommerce/productos_brandon/')
        .then((resultado) => {
            return (resultado.json());
        })
        .then((datos) => {
            for (i in datos.items) {
                console.log(datos.items[i]);
                document.getElementById("productos").innerHTML +=
                    `
                    <div class="container text-center">
                    <div class="row align-items-start">
                      <div class="col">
                      <div class="row">
                      <div class="col-12 col-md-4">
                          <div class="product">
                             
                              <img src="img/${datos.items[i].imagen}" class="card-img-top" alt="...">
                              <p>${datos.items[i].nombre}</p>
                              <p>$ Precio: ${datos.items[i].precio} </p>
                              <a href=""
                                  target="_blank">Comprar</a>
                          </div>
                      </div>
                      </div>
          
                      </div>
        
                
                `;
            }
        })
        .then(() => { })
        .catch(() => { })

});

async function buscar() {
    await 123;

}