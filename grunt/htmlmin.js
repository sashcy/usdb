module.exports = {                                   // Task
        all: {   
            options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },                                  // Another target
            files: [{
                expand: true,
                cwd: 'src',
                src: ['**/*.html', '*.html'],
                dest: 'dist'
          }]
        }
};