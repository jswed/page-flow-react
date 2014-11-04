var gulp = require('gulp');
var browserify = require('gulp-browserify');
var jsx = require('gulp-react');

var watcher = gulp.watch('js/**/*.js', ['uglify', 'reload']);
watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');

});

var source = ['lib/**/*.jsx', 'index.js'];
gulp.task('jsx', function () {
    return gulp.src(source[0])
        .pipe(jsx())
        .pipe(gulp.dest('lib'));
});

gulp.task('browserify', ['jsx'], function () {
    // Single entry point to browserify
    gulp.src(source[1])
        .pipe(browserify({
            debug: true
        }))
        .pipe(gulp.dest('build'))
});

gulp.task('default', ['browserify', 'jsx']);
gulp.task('watch', function () {
    gulp.watch(source, ['default']);
});
