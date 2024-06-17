document.addEventListener("DOMContentLoaded", function () {
    iniciarApp();
});

function iniciarApp() {
    navegacionFija();
    crearGaleria();
    scrollNav();
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){
        if (sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo');
            body.classList.add('scroll-bueno');
        }else{
            barra.classList.remove('fijo');
            body.classList.remove('scroll-bueno')
        }
    })
}



function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault(); //previene que nos lleve de golpe a la seccion seleccionada

            //creamos un nuevo efecto para mostrar
            const seccionScroll = e.target.attributes.href.value; //obtenemos el valor de href del enlace que está en el html y lo asignamos a una variable
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});

        });
    });
}


function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
            <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
            <img
                loading="lazy"
                width="200"
                height="300"
                src="build/img/thumb/${i}.jpg"
                alt="Imagen Galeria"
            />
        `; //creamos codigo html que se va inyectar al index.html en la seccion de galeria para mostrar todas las imagenes en formato de baja resolucion
        // y con el ciclo for estamos recorriendo todas las imagenes que hay en la carpeta para luego mostrarlas en el html

        imagen.onclick = function () {
            mostrarImagen(i);
        };

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
            <source srcset="build/img/grande/${id}.avif" type="image/avif" />
            <source srcset="build/img/grande/${id}.webp" type="image/webp" />
            <img
                loading="lazy"
                width="200"
                height="300"
                src="build/img/grande/${id}.jpg"
                alt="Imagen Galeria"
            />
        `;
    //CREAR EL OVERLAY CON LA IMAGEN
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");
    overlay.onclick = function(){
        const body = document.querySelector("body");
        body.classList.remove("fijar-body");
        overlay.remove();
    }

    //BOTON PARA CERRAR EL MODAL
    const cerrarModal = document.createElement("P");
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("btn-cerrar");
    cerrarModal.onclick = function () {
        const body = document.querySelector("body");
        body.classList.remove("fijar-body");
        overlay.remove();
    };
    overlay.appendChild(cerrarModal);

    //AÑADIRLO AL HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}
