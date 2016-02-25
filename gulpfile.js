// project - test AngularJs, gulpfile
var gulp = require('gulp');
var karma = require('gulp-karma');
var allFiles = [

  /* Library files */
  'EM/libs/angular.min.js',
  'EM/libs/angular-route.min.js',
 
    
  /* Custom Files*/
  
  'EM/app.js',
  'EM/expense/**/*.js',

  /* Testing library and specs files*/
  'EM/libs/angular-mocks.js',
  'test/unit-tests/**/*.js'
];
gulp.task('test', function (coverage) {
  gulp.src(allFiles)
    .pipe(karma({
      configFile: 'unit-tests.conf',
      action: 'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
