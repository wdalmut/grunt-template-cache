module.exports = function(grunt) {
  'use strict';

  var fs   = require("fs");
  var glob = require("glob");
  var _    = require("underscore");
  var q    = require("q");

  grunt.registerMultiTask("template-cache", 'Create a template cache object list',  function() {
    var glob = this.data.glob;
    var cachePath = this.data["cache-out"];

    var paths = grunt.file.expand({}, glob);

    var cache = {};
    _.each(paths, function(path) {
      grunt.verbose.writeln("Prepare new entry for path: " + path);
      cache[path] = grunt.file.read(path);
    });

    grunt.file.write(cachePath, JSON.stringify(cache));
    grunt.log.oklns("Template cache ready at path: " + cachePath);
  });
};
