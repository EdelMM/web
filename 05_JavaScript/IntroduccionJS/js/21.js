//arrow functions

//las arrow functions se quita la palabra reservada "function" y despues de los parentesis donde se 
// agregan los parametros, se coloca un "=>", y cuando dentro de las llaves se tiene una linea nomas, 
// las llaves son opcionales

const sumar = (n1, n2) => console.log(n1 + n2);

sumar(22, 19);

//cuando solo hay un parametro, los parentesis tambien son opcionales
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JS');






//Array methods

const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor', precio: 200},
    {nombre: 'Audifonos', precio: 320},
    {nombre: 'Teclado', precio: 250},
    {nombre: 'Mouse', precio: 150},
    {nombre: 'Móvil', precio: 700},
    {nombre: 'Laptop', precio: 1200},
    {nombre: 'Tablet', precio: 500},
];



//forEach
//para ver si el elemento que estamos buscando esta dentro del arreglo
meses.forEach(mes => {
    if(mes == 'Febrero'){
        console.log('Febrero está en el arreglo');
    }
});


let busqueda;
//some
//para arreglos de objetos 
//cuando tenemos un return en un arrow function, debemos de quitarlo y se da por implicito
busqueda = carrito.some( producto => producto.nombre === 'Mouse');


//reduce
//para sumar los precios
busqueda = carrito.reduce((total, producto) => total + producto.precio, 0);

//filter
//basicamente un filtro
busqueda = carrito.filter(producto => producto.precio > 500);


busqueda = carrito.filter(producto => producto.nombre === 'Laptop');
console.log(busqueda);
