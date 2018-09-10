var gulp = require('gulp');
var shelljs = require('shelljs');
var browserify = require('browserify');
var fs = require('fs');
var sequence = require('run-sequence');
gulp.task('default', function(){
    sequence('mainjs', 'watch');
});

gulp.task('mainjs', function(){
    browserify().add('assets/js/index.js').bundle().pipe(fs.createWriteStream('main.js'));  
});
gulp.task('watch', function(){
    gulp.watch(['assets/js/*.js'], function(){
        sequence('mainjs');
    });
})