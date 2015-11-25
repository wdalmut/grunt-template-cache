module.exports = function(grunt) {
  'use strict';

  var _ = require("underscore");
  grunt.registerMultiTask("template-cache", 'Create a template cache object list',  function() {
    var opts = this.data;
    var glob = opts.glob;
    var cachePath = opts.dest;
    var pathFilter = function(path) {
      return path.replace(opts.regex_path_filter, "");
    };

    var paths = grunt.file.expand({}, glob);

    var cache = {};
    _.each(paths, function(path) {
      grunt.verbose.writeln("Prepare new entry for path: " + path);
      cache[pathFilter(path)] = grunt.file.read(path);
    });

    grunt.file.write(cachePath, JSON.stringify(cache));
    grunt.log.oklns("Template cache ready at path: " + cachePath);
  });
};
