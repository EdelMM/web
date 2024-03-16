const num = "1000";

if (num !== 100) {
    console.log("el numero es diferente");
} else {
    console.log("El numero efecivamente es 1000");
}

const carrito = 262;
const dineroEnMano = 262;

if (carrito <= dineroEnMano) {
    console.log(`ok puedes pagar, te quedan disponibles para gastar ${dineroEnMano - carrito} pesos.`);
} else {
    console.log(`Lo siento, no puedes pagar, te faltan ${carrito - dineroEnMano} pesos para acompletar`);
}

const nombre = "r";

if (nombre === "rogelio") {
    console.log("te llamas rogelio");
} else if (nombre == "Rogelio") {
    console.log("te llamas Rogelio pero con la R mayuscula");
} else {
    console.log("saquese, usted no es rogelio");
}
