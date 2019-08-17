

function defaultTask(cb) {
 /* {protractor} = require 'gulp-protractor'

gulp.task 'test-e2e', ->
  gulp.src e2eDir + '/*.js'
    .pipe protractor {
      configFile: e2eDir + '/protractor.conf.js'
    }
    .on 'error', (e) ->
      throw e
  cb();*/
}

exports.default = defaultTask