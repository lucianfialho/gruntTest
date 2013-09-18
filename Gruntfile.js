module.exports = function( grunt ) {

  // Roda todas as tarefas
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

    'ftp-deploy': {
      build: {
        auth: {
          host: 'weblinux',
          port: 21,
          authKey: 'key1'
        },
        // Arquivos locais
        src: 'C:/lucianfialho/grunttest',
        // Local do destino do ftp
        dest: '/var/www/html/gruntTest',
        
        exclusions: [
          '../**/.DS_Store',
          '../**/Thumbs.db',
          '../.git',
          '../.gitignore',
          '../README.md',
          '../src',
          '../assets',
          'C:/lucianfialho/grunttest/node_modules'
        ]
      }
    }
  });

  // registrando tarefa default
  grunt.registerTask( 'w', [ 'watch' ] );

  // registrando tarefa para deploy
  grunt.registerTask( 'deploy', [ 'ftp-deploy' ] );

};  