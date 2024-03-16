const producto = 'Monitor de 40"';

//si queremos que nuestra cadena de texto muestre las comillas dobles dentro de comillas dobles, se hace lo siguiente:
const producto2 = "Monitor de 60\"";

//para imprimir en consola:
console.log(producto.length);  //con .length podemos saber cuantos caracteres tiene una cadena de texto
console.log(producto2);

console.log(producto2.indexOf('60'));   //con indexof podemos saber en qué posicion se encuntra algun caracter o cadena que queramos
                                        //si nos arroja un valor menos de 0, es que no lo encontró*/

console.log(producto.includes('tor')); //con el metodo includes, lo que nos devuelve es un booleano, diciendonos si se encuentra o no lo que pedimos
console.log(producto2.includes('tortilla'));