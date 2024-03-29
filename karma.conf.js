// Karma configuration file
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54


// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  'bower_components/es5-shim/es5-shim.js',
  'bower_components/es5-shim/es5-sham.js',

  // frameworks
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  // loaded without require
  'bower_components/jquery/jquery.js',
  'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
  'bower_components/jasmine-flight/lib/jasmine-flight.js',

  // loaded with require
  {pattern: 'bower_components/flight/**/*.js', included: false},
  {pattern: 'bower_components/hammerjs/**/*.js', included: false},
  {pattern: 'lib/**/*.js', included: false},
  {pattern: 'test/spec/**/*.spec.js', included: false},

  'test/test-main.js'
];

// list of files to exclude
exclude = [
  'bower_components/flight/lib/standalone/*.js'
];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit', 'teamcity'
// CLI --reporters progress
reporters = [
  'dots'
];

// web server port
// CLI --port 9876
port = 9876;

// cli runner port
// CLI --runner-port 9100
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
// CLI --log-level debug
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
browsers = [
  'Chrome',
  'Firefox'
];

// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout = 5000;

// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = false;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500;
