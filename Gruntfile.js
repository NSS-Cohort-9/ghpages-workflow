module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      main: {
        options: {
          sourceMap: 'inline'
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    clean: ['public'],
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**'],
            dest: 'public/'
          }
        ]
      }
    },
    jade: {
      main: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jade', '!**/_*.jade'],
            dest: 'public/',
            ext: '.html'
          }
        ]
      }
    },
    sass: {
      main: {
        options: {
          sourceMap: true,
          sourceMapEmbed: true
        },
        files: {
          'public/css/main.css': 'src/_styles/main.scss'
        }
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', [
    'clean',
    'copy'
  ]);

};
