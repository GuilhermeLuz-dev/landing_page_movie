const gulp = require("gulp");
const sass = require('gulp-sass')(require("sass"));
const imagemin = require("gulp-imagemin");

function buildStyles(){
    return gulp.src("./src/styles/*.scss")
            .pipe(sass({
                outputStyle : "compressed"
            }))
            .pipe(gulp.dest("dist/styles"));
}

function images(){
    return gulp.src("./src/images/*.jpg")
            .pipe(imagemin())
            .pipe(gulp.dest("./dist/images"));
}

exports.default =  gulp.parallel(buildStyles, images); 

exports.watch = function(){
    gulp.watch("./src/styles/*.scss", buildStyles);
}