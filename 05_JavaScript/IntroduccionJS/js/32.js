//async / await

function descargarNuevosClientes() {
    return new Promise((resolve) => {
        console.log("Descargando clientes, no desespere");

        setTimeout(() => {
            resolve("Los clientes han sido descargados");
        }, 2000);   //settimeout lo que hace es esperar el tiempo indicado en milisegundos, y luego ejecutar una sola vez
    });
}

function descargarUltimosPedidos() {
    return new Promise((resolve) => {
        console.log("Descargando pedidos, no desespere");

        setTimeout(() => {
            resolve("Los pedidos han sido descargados");
        }, 3000);   //settimeout lo que hace es esperar el tiempo indicado en milisegundos, y luego ejecutar una sola vez
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();  //aqui se coloca el await, para decirle donde va estar el promise 
        // const pedidos = await descargarUltimosPedidos();  //aqui se coloca el await, para decirle donde va estar el promise 
        
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }   //se utiliza el try catch en caso de que haya un error y no se pudieran descargar los clientes
}

/* async await nos ayuda a que se vaya cargando todo el resto del codigo sin esperarse a que lo mas pesado en cargar, detenga el flujo de lo demas */


app();
