
(function() {
  'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();
var output  = './dist/';


var files = {
        js: ['./js/**/*.js'],
        jsExtra: ['./lib/**/*.js'],
        jsTest: ['./public/js/angular.min.js',
                    './node_modules/angular-mocks/angular-mocks.js'],
        css: ['./css/**/*.css'],
        cssExtra: ['./lib/**/*.css'],
        img: ['./img/*']
    };

    gulp.task('js', task('js', files.js, output + 'js/'));
    gulp.task('js:extra', task('jsExtra', files.jsExtra, output + 'js/'));
    gulp.task('js:test', task('jsTest', files.jsTest));
    gulp.task('js:lint', task('jsLint', files.js));
    gulp.task('css', task('css', files.css, output + 'css/'));
    gulp.task('css:extra', task('cssExtra', files.cssExtra, output + 'css/'));
    gulp.task('img', task('img', files.img, output + 'img/'));
  
    function task(name) {

        var args = Array.prototype.slice.call(arguments, 1);
        args.unshift(gulp, plugins);

        return require('./gulp/' + name ).apply({}, args);
    }

})();
