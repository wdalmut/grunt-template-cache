var
  path = require('path'),
  fs   = require('fs'),
  exec = require('child_process').exec,
  basepath = path.join(__dirname, '..'),
  execOptions = {
    cwd: basepath
  }
;

exports.tests = {
  tearDown: function(done) {
    filepath = basepath + "/t.json";
    var d = fs.statSync(filepath);
    if (d.isFile()) {
      fs.unlinkSync(filepath);
    }
    done();
  },
  compile_templates: function(test) {
    test.expect(1);
    exec('grunt template-cache:html', execOptions, function(error, stdout) {
      test.equal(
        stdout.indexOf('Template cache ready at path: t.json') > -1,
        true,
        'Files are not cached'
      );
      test.done();
    });
  },
  compile_templates_with_verbose_flag: function(test) {
    test.expect(2);
    exec('grunt template-cache:files --verbose', execOptions, function(error, stdout) {
      test.equal(
        stdout.indexOf('home.html') > -1,
        true,
        'Missing homepage in output list'
      );
      test.equal(
        stdout.indexOf('nav.html') > -1,
        true,
        'Missing nav in output list'
      );
      test.done();
    });
  },
  compile_templates_filtering_the_view_path: function(test) {
    test.expect(3);
    exec('grunt template-cache:filter', execOptions, function(error, stdout) {
      test.equal(
        stdout.indexOf('Template cache ready at path: t.json') > -1,
        true,
        'Files are not cached'
      );
      var content = fs.readFileSync(__dirname + "/../t.json");
      content = JSON.parse(content);

      test.equal((content.hasOwnProperty("home.html")), true, '');
      test.equal((content.hasOwnProperty("nav/nav.html")), true, '');

      test.done();
    });
  }
};
