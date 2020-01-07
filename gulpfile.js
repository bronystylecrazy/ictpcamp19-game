const gulp = require('gulp');
const {
   series,
   parallel
} = require('gulp');
const imagemin = require('gulp-imagemin');

function cases() {
   return gulp.src('src/images/cases/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images/cases'));
}

function candy() {
   return gulp.src('src/images/candy/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images/candy'));
}

function image() {
   return gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
}

function sound() {
   return gulp.src('src/sounds/*').pipe(gulp.dest('dist/sounds'));
}

exports.candy = candy;
exports.image = image;
exports.sound = sound;
exports.cases = cases;
exports.default = series(this.sound, this.image, this.candy, this.cases);