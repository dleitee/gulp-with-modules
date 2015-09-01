module.exports = function(gulp, plugins, sources, output) {
  
  return function() {
    
    return gulp.src(sources)
            .pipe(plugins.karma({
                configFile: './resources/assets/js/test/karma.conf.js',
                action: 'run'
            })
        )
         .on('error', function(err) {
            console.log(err);
            this.emit('end'); 
        });

  };

};