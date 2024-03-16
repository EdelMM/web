const carrito = [
    {nombre: 'Monitor', precio: 200},
    {nombre: 'Audifonos', precio: 320},
    {nombre: 'Teclado', precio: 250},
    {nombre: 'Mouse', precio: 150},
    {nombre: 'Móvil', precio: 700},
    {nombre: 'Laptop', precio: 1200},
    {nombre: 'Tablet', precio: 500},
];


//foreach

// lo utilizamos cuando querramos iterar o mostrar los elementos de un arreglo en pantalla o en la consola
//para iterar y mostrar resultados

carrito.forEach(producto => console.log(producto.nombre));


//map
//si queremos crear un nuevo arreglo, entonces vamos a utilizar el map
//lo que se hace en la siguiente linea, es crear un arreglo con los productos del arreglo carrito, y se asigna a una nueva variable
const arreglo1 = carrito.map(producto => producto.nombre);
console.log(arreglo1);
