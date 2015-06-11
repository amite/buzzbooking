module.exports = function(grunt){

  grunt.initConfig({

    watch: {
      sass: {
        files: ['src/*.scss'],
        tasks: 'sass'
      }
    },

    browserSync: {
      bsFiles: {
        src : [
          'public/assets/css/*.css',
          'public/assets/js/*.js',
        ]
      },
      options: {
        watchTask: true,
        proxy: "buzzbooking.craft.dev"
      }
    },

    sass: {
      dist: {
        files: {
          'public/assets/css/style.css' : 'src/main.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  //Default tasks
  grunt.registerTask('default', ['browserSync', 'watch']);

};
