//funciones
//declaracion de la funcion
function sumar(){
    console.log(1 + 2);
}

sumar();

//expresion de la funcion
const restar = function(){
    console.log(6-2);
}

restar();



//la diferencia entre las dos funciones anteriores es que la primera se puede mandar a llamar antes de declararse y no dará error como sí sucede con la segunda funcion
//

//IIFE
(function(){
    console.log('esto es una funcion iife');
})();