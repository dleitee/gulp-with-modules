module.exports = function(gulp, plugins, sources, output) {
  return function() {
    
    var es          = require('event-stream');
    
    var tasks = sources.map(function(entry){
        
        return gulp.src(entry)
                .pipe(gulp.dest(output));

    });

    return es.merge.apply(null, tasks);

  };
};