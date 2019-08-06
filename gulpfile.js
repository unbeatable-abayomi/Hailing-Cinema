var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
 
gulp.task('css', function () {
  gulp.src('./assets/styless/*.css')
    .pipe(concat('main.css'))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('scripts', function() {
    return gulp.src('./assets/scripts/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist/'));
  });
  gulp.task('run', ['css', 'scripts']);

  gulp.task('watch', function(){
    gulp.watch('./assets/styless/*.css', ['css'])
    gulp.watch('./assets/scripts/*.js', ['scripts'])
  })

  gulp.task('default', ['run', 'watch'])

 // Basic usage
// gulp.task('scripts', function() {
//     // Single entry point to browserify
//     gulp.src('src/js/app.js')
//         .pipe(browserify({
//           insertGlobals : true,
//           debug : !gulp.env.production
//         }))
//         .pipe(gulp.dest('./build/js'))
// }); 


// gulp.task('default', function() {
//     return gulp.src('./main.css')
//         .pipe(cssnano())
//         .pipe(gulp.dest('./out'));
// });

   
// gulp.task('default', () =>
//     gulp.src('src/app.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
// );
 




 
 

