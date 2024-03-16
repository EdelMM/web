//Objeto Math
let resultado;

resultado = Math.PI;
resultado = Math.round(2.499999999999999); //Math.round redondea hacia arriba cuando es de .5 o más, pero hacia abajo cuando es .499999999999999 o menos
resultado = Math.ceil(2.000000000000001); //Math.ceil redondea hacia arriba cuando tiene un valor arriba de .000000000000001
resultado = Math.floor(2.999999999999999); //Math.floor redondea hacia abajo cuando tiene un valor abajo de .999999999999999
resultado = Math.sqrt(64); //devuelve la raiz cuadrada
resultado = Math.abs(-22); //convierte el numero a positivo
resultado = Math.min(10, 22, 5, 13);    //devuelve el numero minimo
resultado = Math.max(10, 22, 5, 13);    //devuelve el numero maximo
resultado = Math.random();  //retorna un numero aleatorio no mayor a 1
resultado = Math.floor(Math.random() * 100);

console.log(resultado);
