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
		},

		cssmin: {
			my_target:{
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},

		imagemin: {                          
	    dynamic: {                         
	      files: [{
	        expand: true,                  
	        cwd: 'images/',                   
	        src: ['**/*.{png,jpg,jpeg}'],   
	        dest: 'dist/'                  
	      }]
	    }
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
};	