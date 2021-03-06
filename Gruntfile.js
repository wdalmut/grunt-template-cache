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
        "glob": "fixtures/**/*.html",
        "dest": "t.json",
      },
      "files": {
        "glob": "fixtures/**/*.html",
        "dest": "t.json",
      },
      "filter": {
        "glob": "fixtures/**/*.html",
        "dest": "t.json",
        "regex_path_filter": /^fixtures\//i
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
