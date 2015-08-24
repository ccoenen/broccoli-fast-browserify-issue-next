// Import some Broccoli plugins
var fastBrowserify = require('broccoli-fast-browserify'),
    mergeTrees = require('broccoli-merge-trees'),
    react = require('broccoli-react-caching');

var srcDir = 'app';


// Transform all JSX files in app folder to regular JS
var appJs = react([srcDir]);

var packagejson = require('./package.json');
var thirdPartyNPMLibs = Object.keys(packagejson.dependencies);
appJs = mergeTrees([srcDir, appJs]);

var appFb = fastBrowserify(appJs, {
  browserify: {
    debug: true
  },
  bundles: {
    'app.js': {
      entryPoints: ['app.js'],
      externals: thirdPartyNPMLibs
    },
    'npm.js': {
      entryPoints: [],
      require: thirdPartyNPMLibs
    }
  }
});

module.exports = appJs;
