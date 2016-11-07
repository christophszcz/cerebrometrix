module.exports = function (grunt){
	grunt.initConfig({

		 

	  concat: {
	    js: {
	      src: ['js/arrow.js' , 'js/contact-form-script.js', 'js/about-section-script.js', 'js/scroll-finish.js', 'js/media-queries.js', 'js/navbar-activation.js'],
	      dest: 'build/scripts.js',
	    },
	  },
	  watch: {
		  scripts: {
		    js: ['**/*.js'],
		    tasks: ['concat'],
		  },
		},

		uglify: {
			options:{
				manage: false
			},
			my_target:{
				files: {
					'js/scripts.min.js' : ['build/scripts.js']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};	