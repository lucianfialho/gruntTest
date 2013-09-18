module.exports = function( grunt ) {

  // Roda todas as tarefas
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    
   watch: {
      css: {
        files: [ '../assets/_scss/**/*' ],
        tasks: [ 'compass' ]
      },
      js: {
        files: '../assets/_js/**/*',
        tasks: [ 'uglify' ]
      }
    },

    compass: {
      dist: {
        options: {
          force: true,
          config: 'config.rb',
          outputStyle: 'compressed'
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          '../build/js/scripts.min.js': [
            '../assets/js/scripts.js'
          ]
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
          'C:\lucianfialho\grunttest\node_modules'
        ]
      }
    }
  });

  // registrando tarefa default
  grunt.registerTask( 'default', [ 'watch' ] );

  // registrando tarefa para deploy
  grunt.registerTask( 'deploy', [ 'ftp-deploy' ] );

};