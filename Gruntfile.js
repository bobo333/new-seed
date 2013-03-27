module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'app/js/app.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	less: {
		base: {
			src: 'app/less/base/*.less',
			dest: 'app/css/base.css',
			options: {
				yuicompress: true
			}
		}
    },
	jshint: {
		all: ['Gruntfile.js', 'app/js/*.js'],
		options:{
			globalstrict: true,
			jquery: true,
			node: true,
			globals: { "angular": false }
		}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  //Load the plugin that provies the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  
  //Load the plugin that provies the "jsHint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less', 'jshint']);

};