//metodos de propiedad

const reproductor = {
    reproducir: function(nombreCancion){
        console.log(`Reproduciendo la canción ${nombreCancion}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombrePlaylist){
        console.log(`Creando la playlist: ${nombrePlaylist}`)
    }
}
reproductor.borrarCancion = function(id){
    console.log(`Borrando la cancion ${id}`);
}


reproductor.reproducir('Nueva cración');
reproductor.pausar();
reproductor.borrarCancion(13);
reproductor.crearPlaylist('dy/dx desde mi interior');