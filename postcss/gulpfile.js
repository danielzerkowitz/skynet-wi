var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');
var sass = require('gulp-sass');
 
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
 
gulp.task('css', function () {
    var processors = [
        autoprefixer,
        pxtorem({
        	prop_white_list: ['width', 'max-width', 'font', 'font-size', 'line-height', 'letter-spacing']
        }),
        //cssnano
    ];
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.scss', ['css']);
});