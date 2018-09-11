var gulp = require('gulp');
var shelljs = require('shelljs');
var browserify = require('browserify');
var fs = require('fs');
var sequence = require('run-sequence');
var watchify = require('watchify');
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
        b.bundle().pipe(fs.createWriteStream('main.js'));
    };
    bundle();
    b.on('update', bundle); 
});
