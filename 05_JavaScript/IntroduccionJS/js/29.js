const num1 = 2;
const num3 = 3;

console.log(num1);

try {
    console.log(num2);
} catch (error) {
    console.log(error);
}
console.log(num3);

//esto es el try catch, nos sirve para atrapar los errores y que el codigo siga ejecutandose
//en la parte de try, es el que va intentar hacer algo y si no puede, va caer en el catch