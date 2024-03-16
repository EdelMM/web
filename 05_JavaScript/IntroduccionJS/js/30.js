//promises

const usuarioAutenticado = new Promise((resolve, reject) => {
    const autent = false;
    if (autent) {
        resolve("el usuario se pudo autenticar"); //resolve es cuando el promise se cumple
    } else {
        reject("saquese de aqui"); //reject es cuando NO se cumple
    }
});

usuarioAutenticado
    //si aqui le pasamos los parametros, obtendremos los datos del promise
    .then((resultado) => console.log(resultado))
    //cuando no se pueda autenticar, colocamos un catch, para tratar el error
    .catch( (error) => console.log(error))

//algo a notar, es que si en la consola vemos algo como Promise al imprimir, significa que nos hace falta el .then()

//existen tres valores Pending, Fulfilled, Reject
//que es pendiente de cumplirse, se cumplió y no se cumplió
