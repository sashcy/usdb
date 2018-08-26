module.exports = function (grunt) {
  return {
    scripts: {
      files: ['src/js/*.js'],
      tasks: ['eslint', 'uglify'],
    },
    html: {
      files: ['src/*.html'],
      tasks: ['copy'],
    },
    css: {
      files: ['src/sass/**/*.scss'],
      tasks: ['stylelint', 'sass', 'cssmin'],
    },
    options: {
      spawn        : false,
      interrupt    : true,
      debounceDelay: 250,
      livereload: true,
      }, 
};
  };
