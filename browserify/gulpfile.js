var gulp = require('gulp');
var shelljs = require('shelljs');
var browserify = require('browserify');
var fs = require('fs');
var sequence = require('run-sequence');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gif = require('gulp-if');

var isProduction = process.env.ENV === 'prod';
gulp.task('default', function(){
    sequence('mainjs');
});

gulp.task('mainjs', function(){
    var b = browserify({
        entries:['assets/js/index.js'],
        cache:{},
        packageCache:{},
        plugin: [watchify]
    });

    var bundle = function(){
        b.
        bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gif(isProduction, uglify()))
        .pipe(gulp.dest('./'));
    };
    bundle();
    b.on('update', bundle); 
});
