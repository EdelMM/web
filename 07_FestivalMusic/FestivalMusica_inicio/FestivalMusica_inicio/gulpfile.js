const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber =require('gulp-plumber'); 

function css(done) { 
    src("src/scss/**/*.scss")//identificar archivo de sass
    .pipe(plumber()) 
    .pipe(sass())//compilarlo
    .pipe(dest("build/css"));//almacenar el archivo en disco duro

    done(); //callback que avisa a gulp cuando llegamos al final
}

function dev(done){
    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css;
exports.dev = dev;