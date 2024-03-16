//Arreglos

// const objeto = {
//     cosa: 'objeto'
// } //Objeto = {}

// const arreglo = []      //Arreglo = []


// const numeros = [9,8,20,30,40,60,70,80,90];
// console.table(numeros);


// //los arreglos pueden tener distintos tipos de datos, incluso objetos y otros arreglos
// const arregloDeArreglos = [89, "Hola", false, null, {nombre: "Gerardo", edad: 28}, [449,63]];
// console.log(arregloDeArreglos);


// //Acceder a los valores de un arreglo
// console.log(numeros[2]);

// //conocer la logitud de un arreglo
// console.log(numeros.length);

// //para iterar los valores de un arreglo, puede ser imprimiento cada valor que tenga el indice que indiquemos, o...

// numeros.forEach(function(num){
//     console.log(num);
// })

const numeros = [9,8,20,30,40,60,70,80,90];

//Agregar elementos al arreglo
numeros[10] = 110;
//si elegimos una posicion que ya está en uso, se va modificar con el valor que hayamos elegido

//para agregar al final es:
numeros.push(22);
numeros.push(23,25,33);     //NO SE RECOMINEDA MODIFICAR LOS DATOS ORIGINALES

//para agregar al principio del arreglo
numeros.unshift(33,56,1);

//para eliminar el ultimo elemento del arreglo
numeros.pop();
//para eliminar el primer elemento del arreglo
numeros.shift();

//para eliminar un elemento en especifico, el primer valor le decimos qué posicion del indice queremos eliminar, y el segundo es cuantos valores queremos eliminar
numeros.slice(3, 2);

console.table(numeros);



//Rest operator o Spread operator
//consiste en copiar el arreglo original para luego agregarle los nuevos datos sin modificar el arreglo original

const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo'];

const mesesA = ['Enero', ...meses, 'Junio'];
//su manera de funcionar es crear un arreglo nuevo y agregar los valores que querramos, entre ellos puede ser un arreglo que ya tenemos


console.log(meses);
console.log(mesesA);