var gulp = require('gulp');
var shelljs = require('shelljs');

gulp.task('default', function(){
    shelljs.exec('browserify index.js -o main.js');
});