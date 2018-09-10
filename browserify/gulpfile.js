var gulp = require('gulp');
var shelljs = require('shelljs');
var browserify = require('browserify');
var fs = require('fs');
gulp.task('default', function(){
    browserify().add('index.js').bundle().pipe(fs.createWriteStream('main.js'));
});