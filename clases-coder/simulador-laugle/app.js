const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const vaciarCarrito = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
});

vaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
});

stockProductos.forEach(element => {
    const div = document.createElement('div')
    div.classList.add('element')
    div.innerHTML = `
    <img src=${element.img} alt="">
    <h3>${element.nombre}</h3>
    <p>${element.descripcion}</p>
    <p>Talle: ${element.talle}</p>
    <p class="precioProducto">Precio:$${element.precio}</p>
    <button id="agregar${element.id}" class="boton-agregar">Agregar <img src="./icon/carrito.png">
    `

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${element.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(element.id)
    })
});

const agregarAlCarrito = (elementId => {
    const existe = carrito.some(element => element.id === elementId)

    if (existe) {
        const element = carrito.map(element => {
            if (element.id === elementId){
                element.cantidad++
            }
        })
    } else {
        const item = stockProductos.find(element => element.id === elementId)
        carrito.push(item)
    }
    actualizarCarrito()
});

const eliminarDelCarrito = (elementId) => {
    const item = carrito.find(element => element.id === elementId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
};

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach(element => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${element.nombre}</p>
        <p>Precio:${element.precio}</p>
        <p>Cantidad: <span id="cantidad"${element.cantidad}</span></p>
        <button onclick ="eliminarDelCarrito(${element.id})" class="boton-eliminar"></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, element) => acc + element.precio, 0)    
}; 