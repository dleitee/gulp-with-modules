module.exports = function(gulp, plugins, sources) {
  return function() {
    
    return gulp.src(sources)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));

  };
};