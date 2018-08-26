const sass = require('node-sass');
module.exports = {  
    all: {
      options: {
        implementation: sass,
          style: 'expanded',
          sourcemap: 'none',
      },
     files: [
        { 
          src: 'src/sass/usdb.scss',              
          dest: 'dist/assets/css/usdb.css' 
        }, 
      ],
    }, 
};