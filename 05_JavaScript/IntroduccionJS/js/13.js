//Objetos
const producto = {
    nombreProducto: 'Playera roja',
    precio: 300,
    disponible: true
}

const coche = {
    peso: '2200kg',
    velmax: '220 km/h'
}

const productoUnido = {...producto, ...coche};


console.log(productoUnido);
console.log(coche);
console.log(producto);