module.exports = function(grunt) {
    
    grunt.initConfig({
        
    uglify: {
        my_target: {
          files: {
            '../SVGIconsLoader.min.js': 'SVGIconsLoader.js'
          }
        }
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['uglify']);
};