
/* ----------- Lista de productos disponibles ----------- */
const productos = [
    { id: 0, nombre: "Cerradura Inteligente WiFi", precio: 45000 },
    { id: 1, nombre: "Cámara de Vigilancia 1080p", precio: 32000 },
    { id: 2, nombre: "Videoportero Inalámbrico", precio: 28000 },
    { id: 3, nombre: "Termostato Inteligente", precio: 5200 },
    { id: 4, nombre: "Kit Iluminación LED Inteligente", precio: 6800 },
    { id: 5, nombre: "Detector de Humo y Gas", precio: 150000 },
    { id: 6, nombre: "Sistema de Seguridad 4 Cámaras", precio: 125000 },
    { id: 7, nombre: "Timbre Inalámbrico WiFi", precio: 6900 },
];

//variable de carrito
let carrito= [];

const CLAVE_CARRITO= "productos";

//guardo carrito en LocalStorage del navegador
function guardarCarrito(){
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
};

//funcion para cargar el carrito guardado si hay.
function cargarCarrito(){
    let carrito_viejo=localStorage.getItem(CLAVE_CARRITO);
    if (carrito_viejo){
        carrito= JSON.parse(carrito_viejo);
    }
    actualizarListaCarrito();
}

//funcion para agregar producto al carrito
function agregarCarrito(producto){
    carrito.push(producto);
    actualizarListaCarrito();
};

//funcion para eliminar un producto del carrito
function quitarCarrito(indice){
    //elimino el producto usando la posición real dentro del carrito.
    carrito.splice(indice, 1);
    actualizarListaCarrito();
};

//funcion para eliminar todos los productos del carrito
function vaciarCarrito(){
    carrito=[];
    actualizarListaCarrito();
}


function pagarCarrito(){

    if (carrito.length==0){
        Swal.fire({
            title: "Pago no realizado!",
            text: "No hay productos cargados en el carrito!",
            icon: "error"
            });
    }
    else{
        Swal.fire({
            title: "Pago realizado!",
            text: "Su producto sera enviado en la brevedad!",
            icon: "success"
            });
    }

    vaciarCarrito();
};

/* ----------- funcion de cargar lista productos ----------- */
function cargarListaProductos(){
    const lista_productos=document.getElementById("lista-productos-ul");
    lista_productos.innerHTML = "";

    for(let producto of productos){
        const item=document.createElement("li");

        item.innerHTML=
            "<span>"+producto.nombre+"</span>" +
            "<span>$"+producto.precio+"</span>" +
            "<button class='btn-agregar' data-indice='" + producto.id + "'>Agregar</button>";
        
        lista_productos.appendChild(item);
    }

    let botones= document.querySelectorAll(".btn-agregar");

    for (let boton of botones){
        boton.addEventListener("click", ()=>{
            //traigo el id del boton agregar para saber cual tocaron.
            let id= boton.getAttribute("data-indice");

            //mando producto a agregar al carrito.
            agregarCarrito(productos[id]);
        })
    }
    

}


/* ----------- funcion de actualizar lista carrito ----------- */
function actualizarListaCarrito(){
    const lista_carrito= document.getElementById("carrito-items-ul");
    lista_carrito.innerHTML= "";

    let total_carrito=0;
    let total_productos=0;

    if (carrito.length== 0){
        lista_carrito.innerHTML= "<li class='carrito-vacio'> El carrito está vacío </li> "
    }
    else {
        carrito.forEach((producto, indice) => {
            let item= document.createElement("li");
            item.className="carrito-item";

            item.innerHTML= 
                "<span>"+producto.nombre+"</span>" +
                "<span>$"+producto.precio+"</span>" +
                "<button class='btn-quitar' data-indice='" + indice + "'>X</button>";

            lista_carrito.appendChild(item);

            //sumo precio de producto al total del carrito
            total_carrito += producto.precio;
            //sumo un producto al total de productos
            total_productos+= 1;
        });

        //agrego funcionalidad a boton quitar de productos de carrito
        let botones= document.querySelectorAll(".btn-quitar");

        for (let boton of botones){
            boton.addEventListener("click",()=>{
                let id= boton.getAttribute("data-indice");

                quitarCarrito(id);
            });
        }
    }

    //calculo monto de carrito dinamico
    const monto_carrito= document.getElementById("monto-carrito");
    monto_carrito.textContent = "$ "+total_carrito;

    const monto_productos= document.getElementById("monto-productos");
    monto_productos.textContent= total_productos;

    guardarCarrito();
}



/* ----------- Arranque de pagina ----------- */
document.addEventListener("DOMContentLoaded", function(){
    cargarCarrito();
    
    cargarListaProductos();
    actualizarListaCarrito();

    const btnVaciar= document.getElementById("vaciar-carrito");
    const btnPagar= document.getElementById("pagar-carrito");

    btnVaciar.addEventListener("click", vaciarCarrito);
    btnPagar.addEventListener("click", pagarCarrito);

});