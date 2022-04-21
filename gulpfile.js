const gulp = require('gulp');
const sass = require('gulp-sass')('sass');

gulp.task ('sass', () => {
    return gulp.src('src/styles/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/styles/style.css'))
})