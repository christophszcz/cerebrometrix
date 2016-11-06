module.exports = function (grunt){
	grunt.initConfig({
	  concat: {
	    js: {
	      src: ['js/about-section-script.js', 'js/contact-form-script.js', 'js/media-queries.js', 'js/navbar-activation.js',  'js/arrow.js', 'js/scroll-finish.js', ],
	      dest: 'build/scripts.js',
	    },
	  },
	  watch: {
		  scripts: {
		    js: ['**/*.js'],
		    tasks: ['concat'],
		  },
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};	