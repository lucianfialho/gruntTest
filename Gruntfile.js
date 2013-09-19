module.exports = function( grunt ) {

  // Roda todas as tarefas sem precisar defifinir um load pra cada tarefas
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    
   watch: {
      css: {
        files: [ 'C:/lucianfialho/grunttest/assets/_scss/**/*' ],
        tasks: [ 'compass' ]
      },
      js: {
        files: 'C:/lucianfialho/grunttest/assets/_js/**/*',
        tasks: [ 'uglify' ]
      }
    },

    compass: {
      dist: {
        options: {
          force: true,
          config: 'C:/lucianfialho/grunttest/assets/config.rb',
          outputStyle: 'compressed'
        }
      }
    },

    uglify: {
      outputStyleptions: {
        mangle: false
      },
      dist: {
        files: {
            'C:/lucianfialho/grunttest/assets/js/scripts.min.js': ['C:/lucianfialho/grunttest/assets/_js/scripts.js', 'C:/lucianfialho/grunttest/assets/_js/publicidade.js']
        }
      }
    },

    ftpush: {
      build: {
        auth: {
          host: 'weblinux',
          port: 21,
          authKey: 'key1'
        },
        src: 'C:/lucianfialho/grunttest',
        dest: '/var/www/html/gruntTest',
        exclusions: [
            'C:/lucianfialho/grunttest/**/.DS_Store',
            'C:/lucianfialho/grunttest/.git',
            'C:/lucianfialho/grunttest/.gitignore',
            'C:/lucianfialho/grunttest/README.md',
            'C:/lucianfialho/grunttest/.sass-cache',
            'C:/lucianfialho/grunttest/node_modules'
          ],
          simple: true
      }
    }
  });

  // registrando tarefa default
  grunt.registerTask( 'w', [ 'watch' ] );

  // registrando tarefa para deploy

};  