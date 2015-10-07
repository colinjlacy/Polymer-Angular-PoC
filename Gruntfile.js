/**
 * Created by colinjlacy on 10/6/15.
 */

module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"./assets/css/site.css": "./assets/less/site.less"
				}
			}
		},
		watch: {
			styles: {
				files: ['assets/less/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['app/**/*.js'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['**/*.html'],
				options: {
					livereload: true
				}
			}
		},
		connect: {
			task: { // give your task a name
				options: {
					port: 3000 // configure your port here
				}
			}
		}
	});

	grunt.registerTask('default', ['less', 'connect', 'watch']);
};