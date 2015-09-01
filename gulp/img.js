module.exports = function(gulp, plugins, sources, output) {
  return function() {
    
    return gulp.src(sources)
                .pipe(plugins.imagemin({
                        progressive: true,
                        svgoPlugins: [{removeViewBox: false}],
                }))
                .pipe(gulp.dest(output));

  };
};
