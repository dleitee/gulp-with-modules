module.exports = function(gulp, plugins, sources, output) {
  return function() {
    
    var babelify    = require('babelify');
    var browserify  = require('browserify');
    var buffer      = require('vinyl-buffer');
    var source      = require('vinyl-source-stream');
    var es          = require('event-stream');

    var tasks = sources.map(function(entry) {

        var file = './resources/assets/js/src/' + entry;      

        return browserify({
                    entries: [file],
                    extensions: ['.js'],
                    debug: false
                })
                .transform(babelify)
                .bundle()
                .pipe(source(entry))
                .pipe(buffer())
                .pipe(plugins.uglify())
                .pipe(plugins.rename({
                    extname: '.bundle.js'
                }))
                .pipe(gulp.dest(output));
                
    });


    return es.merge.apply(null, tasks);

  };
};