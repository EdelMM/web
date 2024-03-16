// function sumar(n1, n2){
//     return n1 + n2;
// }

// const resultado = sumar(89, 11);

// console.log(resultado / 20);



let subtotal = 0;

function agregarCarrito(precio){
    return subtotal += precio;
}


subtotal = agregarCarrito(100);
subtotal = agregarCarrito(200);
subtotal = agregarCarrito(400);
subtotal = agregarCarrito(400);
subtotal = agregarCarrito(400);

function calcImpuesto(subtotal){
    return subtotal * 1.16;
}

const total = calcImpuesto(subtotal);

console.log('el subtotal de tu compra es: ' + subtotal);
console.log('y con impuestos incluidos es: ' + total);

//** EXPLICACION **//
/*creamos la variable subtotal donde se almacenarán la suma de los precios de los productos sin iva
luego creamos una funcion que nos va permitir ir incrementando la variable de subtotal cada que agreguemos un articulo al carrito
despues agregamos todos los productos al carrito con sus respectivos precios
luego calculamos el impuesto de la compra, con otra funcion, multiplicando el subtotal antes calculado, por 1.16
luego el valor que retorna la funcion lo asignamos a una variable llamada total, debido a que nos regresa el precio del producto mas el impuesto
y ahora solo queda imprimir esos valores*/