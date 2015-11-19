module.exports = function(grunt) {
  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodeunit: {
      all: [
        'tests/test_*.js'
      ]
    },
    "template-cache": {
      "html": {
        "glob": "**/*.html",
        "cache-out": "t.json",
      },
    },
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // define tasks
  grunt.registerTask('test', [
    'nodeunit:all'
  ]);
};
