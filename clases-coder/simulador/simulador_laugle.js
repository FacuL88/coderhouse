/* alert("Bienvenido! A continuacion ingresa tus datos");

function iniciar() {
    let usuario = prompt("Ingrese su nombre de usuario");
    
    while (usuario != "Facundo") {

        alert("el usuario ingresado no es correcto");
       
        let nombre = prompt("Para acceder ingrese el nombre correcto");
       
        if (nombre != "Facundo") {
            alert("Vuelve a ingresar tus datos");
        }else{
            alert(`Hola ${nombre}. A continuacion ingresa tu contraseña.`);
            break;
        }
    }

    let password = prompt("ingrese su contraseña");
        
    if (password != "madafaka") {
            alert("La contraseña no es la correcta");
        } else {
            alert("Bienvenido al sitio");
    }        
}


iniciar();

 */


const contenidoHeader = document.getElementById(`contenidoHeader`);
const div = document.createElement(`div`)
div.classList.add("lista")
div.innerHTML = `<li>Productos</li>
<li>Contacto</li>
<img src="./img/cart.svg" class="imgCarrito">
`
contenidoHeader.appendChild(div);

let stockProductos = [
    {id: 1, nombre: "remera", desc: "Remera mangas largas confeccionado en lycra frisada.", precio: 1500, img: "./img/remera.jpg"},
    {id: 2, nombre: "remera", desc: "Remera mangas largas confeccionado en lycra frisada.", precio: 1500, img: "./img/remera.jpg"},
    {id: 3, nombre: "remera", desc: "Remera mangas largas confeccionado en lycra frisada.", precio: 1500, img: "./img/remera.jpg"},
    {id: 4, nombre: "pantalon", desc: "Jean basico confeccionado en denim elastizado.", precio: 1500, img: "./img/pantalon.jpg"},
    {id: 5, nombre: "pantalon", desc: "Jean basico confeccionado en denim elastizado.", precio: 1500, img: "./img/pantalon.jpg"},
    {id: 6, nombre: "pantalon", desc: "Jean basico confeccionado en denim elastizado.", precio: 1500, img: "./img/pantalon.jpg"},
    {id: 7, nombre: "campera", desc: "Campera confeccionada en algodón frisado con lycra.", precio: 1500, img: "./img/campera.jpg"},
    {id: 8, nombre: "campera", desc: "Campera confeccionada en algodón frisado con lycra.", precio: 1500, img: "./img/campera.jpg"},
    {id: 9, nombre: "campera", desc: "Campera confeccionada en algodón frisado con lycra.", precio: 1500, img: "./img/campera.jpg"},
]

const contenidoMain = document.getElementById("contenidoMain");

    let carrito = []
    
    stockProductos.forEach(producto => {
    const div = document.createElement(`div`) 
    div.classList.add(`productos`)
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h2>${producto.nombre}</h2> 
    <p class="descripcion">${producto.desc}</p>
    <p class="precioProducto">Precio:${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>`

    contenidoMain.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener(`click`, ()=> {
        agregarAlCarrito(producto.id)
    })
});

const agregarAlCarrito = (productoId) => {
    const item = stockProductos.find((producto) => producto.id === productoId)
    actualizarCarrito()
    carrito.push(item)
};

const carritoContenedor = document.getElementById(`carritoContenedor`);

const actualizarCarrito = () => {
    carritoContenedor.innerHTML = ""
    carrito.forEach((producto) => {
        const div = document.createElement(`div`)
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
        <button onclick ="eliminarDelCarrito(${producto.id})" class="boton-eliminar">
        `
        carritoContenedor.appendChild(div);
    })
}

