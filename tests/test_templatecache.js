var
  path = require('path'),
  exec = require('child_process').exec,
  execOptions = {
    cwd: path.join(__dirname, '..')
  }
;

exports.tests = {
  compile_templates: function(test) {
    test.expect(1);
    exec('grunt template-cache:html', execOptions, function(error, stdout) {
      test.equal(
        stdout.indexOf('Template cache ready at path: t.json') > -1, 
        true,
        'template file generated'
      );
      test.done();
    });
  }
};
