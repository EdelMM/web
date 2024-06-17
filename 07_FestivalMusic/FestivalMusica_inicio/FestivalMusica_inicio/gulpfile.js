const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber'); 
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
//const postcss = require('gulp-postcss');

//Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
//const avif = require('gulp-avif');
//const webp = require('gulp-webp');

//JS
const terser = require('gulp-terser-js')


function css(done) { 
    src("src/scss/**/*.scss")//identificar archivo de sass
    .pipe(sourcemaps.init())
    .pipe(plumber()) 
    .pipe(sass())//compilarlo
    .pipe(postcss([autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest("build/css"));//almacenar el archivo en disco duro

    done(); //callback que avisa a gulp cuando llegamos al final
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('build/img'))
    done();
}

async function versionWebp(done){
    const webp = await import("gulp-webp"); // Manda a traer la dependencia instalada con "npm install --save-dev gulp-webp" desde la terminal"
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(webp.default(opciones))
    .pipe(dest('build/img'))
    done();
}

async function versionAvif(done){
    const avif = await import("gulp-avif"); // Manda a traer la dependencia instalada con "npm install --save-dev gulp-webp" desde la terminal"
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(avif.default(opciones))
    .pipe(dest('build/img'))
    done();
}

function javascript(done){
    src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))

    done();
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);

    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(css, imagenes, versionWebp, versionAvif, javascript, dev);


